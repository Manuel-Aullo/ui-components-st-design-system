import React from "react";
import { ReactComponent as SLogo } from "../shared/logos/s-logo-sininen-180 1.svg";
import { CUSTOMERCARD_TYPES } from "./CustomerCard";
import { colors } from "../shared/styles";

export const JiraStatsData = {
  type: CUSTOMERCARD_TYPES.JIRA_STATS,
  logo: <SLogo />,
  backgroundColor: colors.primary.CCBlue,
  dividerColor: colors.secondary.CCDarkBlue,
  totalLabel: "Total tickets",
  totalNumber: 1,
  customer: "SOK",
  service: "Kamu Prod Launcher API",
  stats: [
    {
      statsName: "Response stats",
      values: [
        {
          label: "Failed",
          number: "0",
          unit: "",
        },
        {
          label: "SLA",
          number: "100",
          unit: "%",
        },
        {
          label: "Credit SLA",
          number: "100",
          unit: "%",
        },
      ],
    },
    {
      statsName: "Resolution stats",
      values: [
        {
          label: "Failed",
          number: "0",
          unit: "",
        },
        {
          label: "SLA",
          number: "100",
          unit: "%",
        },
        {
          label: "Credit SLA",
          number: "100",
          unit: "%",
        },
      ],
    },
  ],
};

export const JiraStatsData2 = {
  type: CUSTOMERCARD_TYPES.JIRA_STATS,
  logo: <SLogo />,
  backgroundColor: colors.primary.CCPurple,
  dividerColor: colors.secondary.CCDarkPurple,
  totalLabel: "Total tickets",
  totalNumber: 1,
  customer: "Super long customer name goes into two lines",
  service: "Kamu",
  stats: [
    {
      statsName: "Response stats",
      values: [
        {
          label: "Failed",
          number: "0",
          unit: "",
        },
        {
          label: "SLA",
          number: "100",
          unit: "%",
        },
        {
          label: "Credit SLA",
          number: "100",
          unit: "%",
        },
      ],
    },
    {
      statsName: "Resolution stats",
      values: [
        {
          label: "Failed",
          number: "0",
          unit: "",
        },
        {
          label: "SLA",
          number: "100",
          unit: "%",
        },
        {
          label: "Credit SLA",
          number: "100",
          unit: "%",
        },
      ],
    },
  ],
};

export const SDFeedbackData = {
  type: CUSTOMERCARD_TYPES.SD_FEEDBACK,
  logo: <SLogo />,
  backgroundColor: colors.primary.CCBlue,
  dividerColor: colors.secondary.CCDarkBlue,
  totalLabel: "Feedback",
  totalNumber: 2,
  customer: "SOK",
  service: "OPSSOK",
  feedbackAverage: "3.5",
  feedbackMax: "5",
  dimColor: "#AA83B8",
  feedbacks: [
    {
      jiraCode: "OPSSOK-968",
      jiraLink: "",
      stars: 3,
      text: "Hienoa palvelua!",
    },
    {
      jiraCode: "OPSSOK-969",
      jiraLink: "",
      stars: 4,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};

export const SDFeedbackData2 = {
  type: CUSTOMERCARD_TYPES.SD_FEEDBACK,
  logo: <SLogo />,
  backgroundColor: colors.primary.CCPurple,
  dividerColor: colors.secondary.CCDarkPurple,
  totalLabel: "Feedback",
  totalNumber: 1,
  customer: "SOK",
  service: "OPSSOK",
  feedbackAverage: "3",
  feedbackMax: "5",
  dimColor: "#EEE6F1",
  feedbacks: [
    {
      jiraCode: "OPSSOK-968",
      jiraLink: "",
      stars: 3,
      text: "Hienoa palvelua!",
    },
  ],
};

const buildSlas = () => {
  let content = [];
  let row = {};
  for (let i = 1; i <= 28; i++) {
    let num = i.toString();
    if (num.length < 2) {
      num = "0" + num;
    }
    const incident = `OPSSOK-82${num}`;
    const sla = 100;
    row = { date: `${num}.02.2021`, sla: sla, incident: incident };
    content.push(row);
  }
  content[0].sla = 99.98;
  content[2].sla = 98.84;
  return content;
};

export const KammiData = {
  type: CUSTOMERCARD_TYPES.KAMMI,
  logo: <SLogo />,
  backgroundColor: colors.primary.CCBlue,
  dividerColor: colors.secondary.CCDarkBlue,
  totalLabel: "Average SLA",
  totalNumber: 99.98,
  totalUnit: "%",
  customer: "SOK",
  service: "Jupa",
  month: "February",
  year: 2021,
  slas: buildSlas(),
};

export const KammiData2 = {
  type: CUSTOMERCARD_TYPES.KAMMI,
  logo: <SLogo />,
  backgroundColor: colors.primary.CCPurple,
  dividerColor: colors.secondary.CCDarkPurple,
  totalLabel: "Average SLA",
  totalNumber: 99.98,
  totalUnit: "%",
  customer: "SOK",
  service: "KAMU Prod Launcher API",
  month: "February",
  year: 2021,
  slas: buildSlas(),
};
