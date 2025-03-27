import { IFlashCard, IFlashCardNoId } from "../types"
import { hashCardToId } from "../utils/hashCardToId"

const GENERAL: IFlashCardNoId[] = [
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

const CLOUDWATCH: IFlashCardNoId[] = [
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

const KMS: IFlashCardNoId[] = [
  {
    question: "What is KMS?",
    answer: (
      <ul>
        <li>Key Management Service.</li>
        <li>Region & Public Service</li>
        <li>Occupies the AWS public zone</li>
        <li>Create store an manage keys</li>
        <li>Symmetric and Asymmetric keys</li>
        <li>Cryptographic operations (encrypt, decrypt, etc)</li>
        <li>Keys never leave KMS</li>
      </ul>
    ),
  },
  {
    question: "What security standard does KMS meet?",
    answer: <>Provides FIPS 140-2 (L2)</>,
  },
  {
    question: "What are KMS keys?",
    answer: (
      <ul>
        <li>Container for the actual key</li>
        <li>KMS Keys are logical - ID, date, policy, desc & state</li>
        <li>...backed by physical key material</li>
        <li>Generated by KMS or imported</li>
        <li>KMS Keys can be used tof up to 4KB of data</li>
      </ul>
    ),
  },
  {
    question: "What are DEK keys?",
    answer: (
      <ul>
        <li>Data Encryption Keys</li>
        <li>GenerateDataKey - works on {">"} 4KB</li>
        <li>Key is generated, but not stored</li>
        <li>Encrypted data using plaintext key</li>
        <li>Discard</li>
        <li>Store encrypted key with data</li>
      </ul>
    ),
  },
  {
    question: "At what level are KMS key stored?",
    answer: <>At the region and never leave</>,
  },
  {
    question: "At what level are KMS key stored?",
    answer: <>KMS keys use resource policies over Identity profiles</>,
  },
]

const IAM: IFlashCardNoId[] = [
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
]

const S3: IFlashCardNoId[] = [
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
    question: "What are the bucket versioning status?",
    answer: (
      <>
        __PIC__
        <ul>
          <li>Disabled</li>
          <li>Enabled</li>
          <li>Suspended</li>
        </ul>
      </>
    ),
  },
  {
    question: "What is the upload limitation of S3 PUT?",
    answer: (
      <>
        <ul>
          <li>Single data stream</li>
          <li>Stream fails, upload fails</li>
          <li>Requires full restart</li>
          <li>Speed & reliability = limit of 1 stream</li>
        </ul>
      </>
    ),
  },
  {
    question: "What is S3 Multipart upload?",
    answer: (
      <>
        <ul>
          <li>Breaks data up</li>
          <li>Min size 100MB to use</li>
          <li>Split into max of 10,000 parts, sizer range from 5MB to 5BG</li>
          <li>Last part can be smaller than 5MB</li>
          <li>Parts can fail, and be restarted</li>
          <li>Improves transfer rate by doing work in parallel </li>
        </ul>
      </>
    ),
  },
  {
    question: "What S3 transfer acceleration?",
    answer: (
      <>
        <ul>
          <li>Uses edge locations</li>
          <li>Disabled by default</li>
          <li>Uses closest, best performing edge location</li>
        </ul>
      </>
    ),
  },
  {
    question: "What storage class is used by default in AWS?",
    answer: <>S3 Standard</>,
  },
  {
    question: "What is S3 Standard?",
    answer: (
      <ul>
        <li>Objects replicated across 3 availability zones.</li>
        <li>Provides 11 9s of durability</li>
        <li>MD5 checksums used to detect and fix data corruption</li>
        <li>Cyclic Redundancy Checks (CRCs)</li>
        <li>HTTP 200 indicated data was stored durably</li>
        <li>GB/m fee for data stored.</li>
        <li>$ per GB fee for transfer OUT</li>
        <li>Price per 1,000 requests</li>
        <li>Data Accessible Immediately</li>
        <li>Use for frequently accessed data</li>
      </ul>
    ),
  },
  {
    question: "What is S3 Standard-IA?",
    answer: (
      <ul>
        <li>S3 Standard Infrequent Access</li>
        <li>Same features as standard</li>
        <li>Lower storage costs</li>
        <li>Cost per GB data retrieval fee</li>
        <li>In addition to transfer fee</li>
        <li>Cost increases with frequent data access</li>
        <li>Minimum duration cost of 30 days</li>
        <li>Used for long lived data which is important or irreplaceable</li>
      </ul>
    ),
  },
  {
    question: "What is S3 One Zone-IA?",
    answer: (
      <ul>
        <li>S3 Standard Infrequent Access</li>
        <li>Same features as Infrequent Access</li>
        <li>Data only stored in One AZ</li>
        <li>Used for long lived data which non-critical or replication</li>
      </ul>
    ),
  },
  {
    question: "What is S3 Glacier - Instant?",
    answer: (
      <ul>
        <li>S3 Standard Allows for instant access, but expensive to access</li>
        <li>Used for when data is needed instantly, but not often</li>
        <li>Minimum duration cost of 90 days</li>
      </ul>
    ),
  },
  {
    question: "What is S3 Glacier - Flexible?",
    answer: (
      <ul>
        <li>S3 Standard Allows for instant access, but expensive to access</li>
        <li>Same durability as Standard S3</li>
        <li>Data treated as cold objects, not immediately available</li>
        <li>Need to initiate a retrieval process to access</li>
        <li>Stored in S3 Standard-IA temporally</li>
        <li>
          Used for when data is needed infrequently and waits can be tolerated
        </li>
        <li>Minimum billing size of 40kb</li>
        <li>Minimum duration cost of 90 days</li>
      </ul>
    ),
  },
  {
    question: "What are the retrieval speeds for S3 Glacier - Flexible?",
    answer: (
      <ul>
        <li>Expedited (1-5 min)</li>
        <li>Standard (3-5 hr)</li>
        <li>Bulk (5-12 hr)</li>
        <li>Faster = more expensive</li>
        <li>Used for when data is rarely if ever needed and is archival</li>
      </ul>
    ),
  },
  {
    question: "What is S3 Glacier - Deep Archive?",
    answer: (
      <ul>
        <li>Minimum billing size of 40kb</li>
        <li>Minimum duration cost of 180 days</li>
        <li>Need to initiate a retrieval process to access</li>
        <li>Stored in S3 Standard-IA temporally</li>
      </ul>
    ),
  },
  {
    question: "What are the retrieval speeds for S3 Glacier - Flexible?",
    answer: (
      <ul>
        <li>Standard (12 hr)</li>
        <li>Bulk (up to 48 hr)</li>
        <li>Faster = more expensive</li>
        <li>Storage is cheapest, but much longer restore times</li>
      </ul>
    ),
  },
  {
    question: "What is S3 Intelligent Tiering?",
    answer: (
      <ul>
        <li>__FILL__</li>
      </ul>
    ),
  },
  {
    question: "What is S3 Lifecycle configuration?",
    answer: (
      <ul>
        <li>A set of rules</li>
        <li>Rules consist of actions on a Bucket or groups of objects</li>
        <li>Transition Actions</li>
        <li>Expiration Actions</li>
      </ul>
    ),
  },
  {
    question: "What are the types of S3 replication",
    answer: (
      <ul>
        <li>Cross Region Replication (CRR)</li>
        <li>Same Region Replication (SRR)</li>
      </ul>
    ),
  },
  {
    question: "What is needed for cross account S3 replication to work?",
    answer: (
      <>
        The destination bucket needs a resource policy granting replication /
        write access
      </>
    ),
  },
  {
    question: "What are the S3 replication option?",
    answer: (
      <ul>
        <li>All objects or a subset</li>
        <li>Storage Class - default same class</li>
        <li>Ownership - default is same as source account</li>
        <li>
          Replication Time Control (RTC) - additional
          <ul>
            <li>15 minute SLA onto the replication process</li>
            <li>Only use if you have strict requirements</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    question: "What are some S3 versioning considerations?",
    answer: (
      <ul>
        <li>Replication is not retroactive by default</li>
        <li>Both source and destinations </li>
        <li>Batch replication can be used to replicate existing objects</li>
        <li>One-way replication process (not bi-directional)</li>
        <li>Bi-directional can happen with an additional setting</li>
        <li>Unencrypted, SSE-S3 & SSE-KMS (with config), SSE-C</li>
        <li>Owner of the source bucket needs permissions to objects</li>
        <li>No system events, Glacier or Glacier Deep Archive</li>
        <li>No DELETE markers are added by default (can be added)</li>
      </ul>
    ),
  },
  {
    question: "Why would you use S3 replication?",
    answer: (
      <ul>
        <li>SSR - Log Aggregation</li>
        <li>SSR - PROD and TEST Sync</li>
        <li>SSR - Resilience with strict sovereignty</li>
        <li>CRR - Global Resilience Improvements</li>
        <li>CRR - Latency Reduction</li>
      </ul>
    ),
  },
  {
    question: "What permissions does an S3 Presigned URL have?",
    answer: <>The permissions of the identity that generated it ATM</>,
  },
  {
    question: "What is wrong with using a role for S3 Presigned URLs?",
    answer: <>URL stops working when temporary credentials expire</>,
  },
]

const S3_SECURITY: IFlashCardNoId[] = [
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
  {
    question: "What is SSE in the Context of S3?",
    answer: <>Sever Side Encryption, SSE is now mandatory.</>,
  },
  {
    question: "What is Client Side Encryption in the Context of S3?",
    answer: (
      <>Sever Side Encryption w/ customer provided keys. AWS is not trusted.</>
    ),
  },
  {
    question: "What is SSE-C in the Context of S3?",
    answer: (
      <>
        Sever Side Encryption w/ customer provided keys. AWS is trusted to use
        keys. Keys managed and risk assumed by customer.
      </>
    ),
  },
  {
    question: "What is SSE-S3 in the Context of S3?",
    answer: (
      <>
        Sever Side Encryption w/ S3 managed keys. Anyone with bucket access can
        view.
      </>
    ),
  },
  {
    question: "What is SSE-KMS in the Context of S3?",
    answer: (
      <>
        Sever Side Encryption w/ KMS managed keys. KMS manages, role separation
        possible between sets of identities.
      </>
    ),
  },
  {
    question: "What are S3 bucket keys?",
    answer: (
      <ul>
        <li>
          Keys from KMS are leased (offloaded) to the bucket for a short time
        </li>
        <li>CouldTrail KMS events now show the bucket</li>
        <li>...Key associate with bucket, NOT the object</li>
        <li>Works with replication</li>
      </ul>
    ),
  },
]

export const deck_SAA_CO3: IFlashCard[] = [
  ...GENERAL,
  ...CLOUDWATCH,
  ...IAM,
  ...KMS,
  ...S3,
  ...S3_SECURITY,
].map((card) => ({ id: hashCardToId(card), ...card }))

export default deck_SAA_CO3

const Q = {
  question: "",
  answer: <></>,
}
