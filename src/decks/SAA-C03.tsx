import { IFlashCard } from "../types"

const GENERAL: IFlashCard[] = [
  {
    question: "What is High Availability",
    answer: (
      <>
        Aims to <strong>ensure</strong> an agreed level of operational{" "}
        <strong>performance</strong>, usually
        <strong>uptime</strong>, for a{" "}
        <strong>higher than normal period</strong>.
        <ul>
          <li>HA does not aim to stop failure.</li>
          <li>Doesn't mean customers won't experience outages.</li>
          <li>It is about maximizing a system's online time.</li>
          <li>Aim is to minifify outages or the impact an outage has.</li>
        </ul>
      </>
    ),
  },
]

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
    answer: <>A container for monitoring data.</>,
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
    answer: (
      <>
        Name/Value pairs that allow cloudwatch to separate things or provide
        perspectives.
      </>
    ),
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

const IAM: IFlashCard[] = [
  {
    question: "What is an IAM policy?",
    answer: (
      <>
        A set of security statements to AWS", Grants access and/or Denies access
        to AWS products and features to an identity.
      </>
    ),
  },
  {
    question: "What is a n IAM policy document?",
    answer: <>--FILL--1</>,
  },
  {
    question: "What is a SID?",
    answer: <>Statement ID</>,
  },
  {
    question: "What is the priority order of permission grants?",
    answer: (
      <>
        <ol>
          <li>Explicit Deny</li>
          <li>Explicit Grant</li>
          <li>Deny by default</li>
          <li>...Deny, allow, deny</li>
          <li>Root account has access to all</li>
        </ol>
        <ul>
          <li>...Deny, allow, deny</li>
          <li>Root account has access to all</li>
        </ul>
      </>
    ),
  },
  {
    question: "What is a managed policy?",
    answer: <>--FILL--1</>,
  },
  {
    question: "What are IAM Users?",
    answer: (
      <>
        IAM Users are an identity used for anything requiring long-term AWS
        <ul>
          <li>Humans</li>
          <li>Applications</li>
          <li>Service Accounts</li>
        </ul>
      </>
    ),
  },
  {
    question: "What is a Principle in the Context of IAM?",
    answer: (
      <>
        An entity trying to access an AWS account via authentication.
        <ul>
          <li>Person</li>
          <li>Computer</li>
          <li>Service</li>
        </ul>
        Starts un-authed, must prove claim to becomes authed.
      </>
    ),
  },
  {
    question:
      "What is the difference between authentication and authorization?",
    answer: <>--FILL--2.5.0</>,
  },
  {
    question: "What is an ARN",
    answer: <>An AWS unique identifier for AWS resources.</>,
  },
  {
    question: "What is the IAM User Limit",
    answer: <>5,000</>,
  },
  {
    question: "How many groups can an IAM user belong to?",
    answer: <>10</>,
  },
  {
    question: "What are IAM groups?",
    answer: (
      <>
        Are container for IAM users.
        <ul>
          <li>Can't log into them.</li>
          <li>Have no creds of their own.</li>
          <li>Used for organizing IAM users</li>
        </ul>
      </>
    ),
  },
  {
    question: "Is there an all users group in AWS",
    answer: (
      <>
        No, not by default
        <ul>
          <li>You would have to implement yourself if you wanted this...</li>
        </ul>
      </>
    ),
  },
  {
    question: "What are IAM roles",
    answer: (
      <>
        A type of identity that lives in an aws account.
        <ul>
          <li>Often used in a temporary capacity.</li>
          <li>Represents a level of access.</li>
        </ul>
      </>
    ),
  },
  {
    question: "What kind of policies can be attached to an IAM Role?",
    answer: (
      <>
        <ul>
          <li>
            The trust policy
            <ul>
              <li>Which identities can assume that Role.</li>
              <li>
                <strong></strong>:
              </li>
            </ul>
          </li>
          <li>The permissions policy</li>
          <ul>
            <li>What the Role is allowed to do.</li>
          </ul>
        </ul>
      </>
    ),
  },
]

const deck: IFlashCard[] = [...GENERAL, ...CLOUDWATCH, ...IAM]

export default deck
