export const SIDE_MENU_ACTIONS = {
  TOGGLE_FILTER_CHECKMARK: "toggleFilterCheckmark",
  TOGGLE_CUSTOMER_CHECKMARK: "toggleCustomerCheckmark",
  TOGGLE_SUBTREE: "openSubtree",
};

export const initialState = {
  customers: [
    { name: "OLD SOK Paikkatieto", id: 1, checked: false },
    { name: "SOK Flexera", id: 2, checked: false },
    {
      name: "Alma Media Oyj",
      id: 3,
      checked: false,
      treeOpen: false,
      indeterminate: false,
      tree: [
        {
          name: "Aamujakelu Oy",
          id: 31,
          checked: false,
          treeOpen: false,
          indeterminate: false,
          tree: [{ name: "Alma Manu", id: 311, checked: false }],
        },
        { name: "Aamulehti", id: 32, checked: false },
      ],
    },
    { name: "MTV", id: 4, checked: false },
    { name: "Suomen Osuuskauppojen Keskuskunta SOK", id: 5, checked: false },
    {
      name: "Other customers",
      id: 6,
      checked: false,
      treeOpen: false,
      indeterminate: false,
      tree: [
        {
          name: "A-lehdet",
          id: 61,
          checked: false,
          treeOpen: false,
          indeterminate: false,
          tree: [
            {
              name: "A-lehdet Passionate Suoport for AWS",
              id: 611,
              checked: false,
            },
          ],
        },
        { name: "Aktia Pankki Oyj", id: 62, checked: false },
        {
          name: "Barona Oy",
          id: 63,
          checked: false,
          treeOpen: false,
          indeterminate: false,
          tree: [
            {
              name: "Barona Passionate Suoport for AWS",
              id: 631,
              checked: false,
            },
            {
              name: "Barona Passionate Suoport for Azure",
              id: 632,
              checked: false,
            },
          ],
        },
      ],
    },
  ],

  checkboxItems: [
    { label: "Bulletin", checked: false },
    { label: "Request", checked: false },
    { label: "Change", checked: false },
    { label: "Standard Change", checked: false },
    { label: "Incident", checked: false },
    { label: "Subchange", checked: false },
    { label: "Problem", checked: false },
    { label: "Sub-task", checked: false },
  ],
};

export function sideMenuReducer(state, action) {
  switch (action.type) {
    case SIDE_MENU_ACTIONS.TOGGLE_FILTER_CHECKMARK: {
      const cbox = state.checkboxItems[action.payload];
      cbox.checked = !cbox.checked;
      return { ...state, cbox };
    }

    case SIDE_MENU_ACTIONS.TOGGLE_CUSTOMER_CHECKMARK: {
      const updated = findId(state, action.payload, "checked");
      if (updated) {
        toggleTreeCheckmark(updated, action.payload);
        setTreeIndeterminateState(updated);
        return { ...state, updated };
      } else return { ...state };
    }

    case SIDE_MENU_ACTIONS.TOGGLE_SUBTREE: {
      const updated = findId(state, action.payload, "treeOpen");

      if (updated) {
        return { ...state, updated };
      } else return { ...state };
    }

    default:
      throw new Error();
  }
}

function findId(state, id, property) {
  const updated1 = state.customers.find((obj) => {
    if (obj.id === id) {
      obj[property] = !obj[property];
      return true;
    } else return false;
  });

  const updated2 = state.customers.find((obj) => {
    let found = false;

    if (obj.tree) {
      obj.tree.forEach((item) => {
        if (item.id === id) {
          found = true;
          item[property] = !item[property];
        }
      });
      return found;
    } else return false;
  });

  const updated3 = state.customers.find((obj) => {
    let found = false;

    if (obj.tree) {
      obj.tree.forEach((item) => {
        if (item.tree) {
          item.tree.forEach((subItem) => {
            if (subItem.id === id) {
              found = true;
              subItem[property] = !subItem[property];
            }
          });
          return found;
        } else return false;
      });
      return found;
    } else return false;
  });

  return updated1 || updated2 || updated3;
}

function toggleTreeCheckmark(customer, id) {
  if (customer.tree) {
    if (id === customer.id) {
      // set all "checked" properties in tree below this to customer.checked
      customer.tree.forEach((customer2) => {
        customer2.checked = customer.checked;
        if (customer2.tree) {
          customer2.tree.forEach((customer3) => {
            customer3.checked = customer.checked;
          });
        }
      });
    } else {
      customer.tree.forEach((item) => {
        if (item.id === id && item.tree) {
          // set all "checked" properties in tree below this to item.checked
          item.tree.forEach((level3) => {
            level3.checked = item.checked;
          });
        }
      });
    }
  }
}

function setTreeIndeterminateState(customer) {
  let checkmarks = 0;
  let children = 0;

  if (customer.tree) {
    // level 2 tree

    customer.tree.forEach((cust2) => {
      if (cust2.tree) {
        checkmarks = 0;
        children = 0;
        cust2.tree.forEach((cust3) => {
          if (cust3.checked) {
            checkmarks++;
          }
          children++;
        });

        const indeterminate = !(children === checkmarks || checkmarks === 0);
        cust2.indeterminate = indeterminate;
        if (!indeterminate) {
          cust2.checked = checkmarks !== 0;
        }
      }
    });

    // level 1 downwards trees

    checkmarks = 0;
    children = 0;
    customer.tree.forEach((customer2) => {
      if (customer2.checked) {
        checkmarks++;
      }
      children++;
      if (customer2.tree) {
        customer2.tree.forEach((customer3) => {
          if (customer3.checked) {
            checkmarks++;
          }
          children++;
        });
      }
    });

    const indeterminate = !(children === checkmarks || checkmarks === 0);
    customer.indeterminate = indeterminate;
    if (!indeterminate) {
      customer.checked = checkmarks !== 0;
    }
  }
}
