import { IFlashCard } from "../types"
import { ReactNode } from "react"

const CLOUDWATCH: IFlashCard[] = [
  {
    question: "What three main things does Cloudwatch Do?",
    answer: (
      <ul>
        <li>
          <strong>Metrics</strong>: AWS Products, Apps, On Prem
          <ul>
            <li>CPU Use</li>
          </ul>
        </li>
        <li>
          <strong>Logs</strong>: AWS Products, Apps, On Prem
          <ul>
            <li>System Logs</li>
            <li>Custom Logs</li>
            <li>STD Out</li>
          </ul>
        </li>
        <li>
          <strong>Events</strong>: Services & Schedules
          <ul>
            <li>Cron Jobs</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    question: "What is a Namespace in Cloudwatch?",
    answer: "A container for monitoring data.",
  },
  {
    question: "What is a Metric in Cloudwatch?",
    answer: (
      <>
        A collection of related data points in a time ordered structure.
        <ul>
          <li>CPU Usage</li>
          <li>Network</li>
          <li>I/O</li>
        </ul>
        *Metric is not specific to a server
      </>
    ),
  },
  {
    question: "What is a Datapoint in Cloudwatch?",
    answer: (
      <>
        A single measurement that is rolled up to a CW metric.
        <ul>
          <li>A timestamp</li>
          <li>Value</li>
        </ul>
      </>
    ),
  },
  {
    question: "What is a Dimension in Cloudwatch?",
    answer:
      "Name/Value pairs that allow cloudwatch to separate things or provide perspectives.",
  },
  {
    question: "What is an Alarm in Cloudwatch?",
    answer: (
      <>
        Allows us to take actions based on metrics.
        <ul>
          <li>
            <strong>OK</strong>: Good state.
          </li>
          <li>
            <strong>Alarm</strong>: Bad state, perform SNS or action.
          </li>
          <li>
            <strong>Insufficient Data</strong>: Alarm is gathering data.
          </li>
        </ul>
      </>
    ),
  },
]

const deck: IFlashCard[] = [...CLOUDWATCH]

export default deck
