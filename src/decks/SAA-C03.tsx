import { IFlashCard } from "../types"

const GENERAL: IFlashCard[] = [
  {
    question: "What is High Availability?",
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
  {
    question: "What is Fault Tolerance?",
    answer: (
      <>
        The property that enables a system to continue operating properly in the
        event of the failure (one or more faults within) of its components.
        <ul>
          <li>Work through failure without disruption</li>
          <li>Operate through failure</li>
        </ul>
      </>
    ),
  },
  {
    question: "What is Disaster Recovery?",
    answer: (
      <>
        A set of policies, tools and procedures to enabler the recovery or
        continuation of vital technology infrastructure and systems following a
        natural or human-induced disaster.
        <ul>
          <li>What to do when disaster occurs</li>
          <ul>
            Considerations
            <li>Pre-planning</li>
            <li>Recovery</li>
            <li>DR Plans</li>
            <li>DR Testing</li>
          </ul>
        </ul>
      </>
    ),
  },
  {
    question: "What is Route 53?",
    answer: (
      <>
        AWS's managed DNS Product
        <ul>
          <li>Global Service, single Database</li>
          <li>Globally Resilient</li>
        </ul>
      </>
    ),
  },
  {
    question: "What services does Route 53 provide?",
    answer: (
      <>
        <ul>
          <li>Register Domains</li>
          <li>Host Zone files</li>
        </ul>
      </>
    ),
  },
  {
    question: "What are Hosted Zones?",
    answer: (
      <>
        <ul>
          <li>Zone Files in AWS</li>
          <li>Hosted on four managed name servers</li>
          <li>Can be public</li>
          <li>or private... linked to VPC(s)</li>
          <li>...stores records (record sets)</li>
        </ul>
      </>
    ),
  },
  {
    question: "What DNS Record Types Exist?",
    answer: (
      <>
        <ul>
          <li>NS Records</li>
          <li>NS Records</li>
        </ul>
      </>
    ),
  },
  {
    question: "What is the NS DNS Record Type?",
    answer: <>Allow delegation to occur in DNS</>,
  },
  {
    question: "What is the A DNS Record Type?",
    answer: <>Map Hostnames to IP addresses, IPV4</>,
  },
  {
    question: "What is the AAAA DNS Record Type?",
    answer: <>Map Hostnames to IP addresses, IPV6</>,
  },
  {
    question: "What is the CNAME DNS Record Type?",
    answer: (
      <>
        Allows you to create the equivalent of DNS shortcuts.
        <ul>
          <li>Host to Host records</li>
          <li>aka Canonical name</li>
        </ul>
      </>
    ),
  },
  {
    question: "What is the MX DNS Record Type?",
    answer: (
      <>
        Is how a server can find the mail server for a specific domain.
        <ul>
          <li>Priority</li>
          <li>Value</li>
        </ul>
      </>
    ),
  },
  {
    question: "What is the TXT DNS Record Type?",
    answer: (
      <>
        Allow you to add arbitrary text to a domain.
        <ul>
          <li>Common use case is proving domain ownership</li>
        </ul>
      </>
    ),
  },
  {
    question: "DNS TTL value?",
    answer: <>Time to live. It is a value in seconds.</>,
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
          <li>
            The permissions policy
            <ul>
              <li>What the Role is allowed to do.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "When to use access roles?",
    answer: (
      <>
        <ul>
          <li>
            Apply to a Service
            <ul>
              <li>Lambda</li>
            </ul>
          </li>
          <li>
            Emergency
            <ul>
              <li>Break glass situation</li>
            </ul>
          </li>
          <li>
            Adding AWS into an existing corporate environment
            <ul>
              <li>Existing identities (active directory)</li>
            </ul>
          </li>
          <li>
            App with 100,000 of users
            <ul>
              <li>see... Identity Federation</li>
            </ul>
          </li>
          <li>Cross account access</li>
        </ul>
      </>
    ),
  },
  {
    question: "What are service Linked Roles",
    answer: (
      <>
        Role linked to a specific AWS service
        <ul>
          <li>Predefined by service</li>
          <li>Can't delete service linked role</li>
          <li>Best practice is to use Role separation</li>
        </ul>
      </>
    ),
  },
  {
    question: "What are pass roles?",
    answer: <>8.3.0</>,
  },
  {
    question: "AWS Organizations",
    answer: (
      <>
        Is product to manage multiple AWS accounts in a cost effective way and
        minimal overhead
      </>
    ),
  },
  {
    question: "What is a Management (Master) Account",
    answer: (
      <>
        __FILL__
        <ul>
          <li>aka Master Account</li>
          <li>aka Payer Account</li>
        </ul>
      </>
    ),
  },
  {
    question: "What is a Management (Master) Account",
    answer: <>__FILL__</>,
  },
  {
    question: "What are Service Control Policies?",
    answer: (
      <>
        Used to restrict AWS accounts
        <ul>
          <li>Policy Documents</li>
          <li>Inherit down the organization tree</li>
          <li>They dont grant permissions, they are boundaries</li>
        </ul>
      </>
    ),
  },
  {
    question: "What does AWS Control Tower do?",
    answer: (
      <>
        Orchestrates other AWS services to pro
        <ul>
          <li>SSO/ID Federation, Centralized Logging and Auditing</li>
          <li></li>
        </ul>
      </>
    ),
  },
  {
    question: "",
    answer: <></>,
  },
]

const S3: IFlashCard[] = [
  {
    question: "What are Bucket Polices",
    answer: (
      <ul>
        <li>A type of AWS resource policy</li>
        <li>The policy is attached to the bucket.</li>
        <li>"Who can access"</li>
        <li>Can control security(Allow/Deny) in same or different accounts</li>
        <li>Can allow or deny Anonymous principals</li>
      </ul>
    ),
  },
  {
    question: "What are S3 permissions by default?",
    answer: (
      <>
        They are private by default. Only the account root user can access by
        default. All other permissions to AWS identities need to be granted.
      </>
    ),
  },
  {
    question: "",
    answer: <></>,
  },
]

const S3_SECURITY_MISC: IFlashCard[] = [
  {
    question: "Best Policy type for controlling different resources?",
    answer: <>Identity Policy</>,
  },
  {
    question: "Best Policy type when you have a preference for IAM?",
    answer: <>Identity Policy</>,
  },
  {
    question: "Best Policy type for controlling same account access?",
    answer: <>Identity Policy</>,
  },
  {
    question: "Best Policy type for just controlling S3?",
    answer: <>Bucket Policy</>,
  },
  {
    question: "Best Policy type for anonymous or cross-account access?",
    answer: <>Bucket Policy</>,
  },
]

const deck: IFlashCard[] = [
  ...GENERAL,
  ...CLOUDWATCH,
  ...IAM,
  ...S3,
  ...S3_SECURITY_MISC,
]

export default deck

const Q = {
  question: "",
  answer: <></>,
}
