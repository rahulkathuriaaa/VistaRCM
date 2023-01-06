// import styles from "./style";
// import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Hero } from "./components";
// import MainHeader from "./components/MainHeader";

import { Switch, Route } from "react-router-dom";
import styles from "./style";
import MainHeader from "./components/MainHeader";
import Home from "./Pages/Home";
import AboutUsPage from "./Pages/AboutUsPage";
import Common from "./Pages/Common";
import { physicianbilling } from "./assets";
import Template from "./Pages/Template";
import Design from "./Pages/Design";
import Blog from "./Pages/Blog";
import TestimonialsPage from "./Pages/TestimonialsPage";
import About from "./Pages/About";
import Careers from "./Pages/Careers";
import MainService from "./Pages/MainService";

// const App = () => (
//   <div className="bg-primary w-full overflow-hidden">
//     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
//       <div className={`${styles.boxWidth}`}>
//         <MainHeader/>
//       </div>
//     </div>

//     <div className={`bg-primary ${styles.flexStart}`}>
//       <div className={`${styles.boxWidth}`}>
//         <Hero />
//       </div>
//     </div>

//     <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
//       <div className={`${styles.boxWidth}`}>
//         <Stats />
//         <Business />
//         <Billing />
//         <CardDeal />
//         <Clients />
//         <CTA />
//         <Footer />
//       </div>
//     </div>
//   </div>
// );

// export default App;

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-black`}>
        <div className={`${styles.boxWidth}`}>
          <MainHeader />
        </div>
      </div>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <AboutUsPage />
          </Route>
          <Route exact path="/service/physician-billing-services">
            <Common
              title="VistaRCM Services"
              text="Physicians Billing Services"
              data=" Deciding to outsource your medical billing and selecting a Revenue Cycle Company (RCM) can be one of the most important decisions you will ever make. In making this decision you must look for a company with longevity in the industry, a varied client base, excellent client references and who has a management team with expertise in medical billing, coding and collections. VistaRCM is such a company who meets these criterias, who is currently providing RCM services to over 600 providers in multiple states across the country. VistaRCM, with over 20 years of successful operational history should be that billing partner as we not only provide proven expertise we can also provide the full cycle of medical billing including the most advanced software and technology."
              headImage={physicianbilling}
              headTitle="Physicians Billing Services"
            />
          </Route>
          <Route exact path="/service/medical-coding">
            <Template
              title="VistaRCM Services"
              text="Medical Coding"
              data="Medical coding is the transformation of healthcare diagnosis, procedures, medical services, and equipmentintouniversalmedical alphanumeric codes. The diagnoses and procedure codes are taken from medical record documentation, such as transcription of physician&#39;s notes, laboratory and radiologic results, etc. Medical coding professionals help ensure the codes are applied correctly during the medical billing process, which includes abstracting the information from documentation,assigning the appropriate codes, and creating a claim to be paid by insurance carriers. A patient&#39;s diagnosis, test results, and treatment must be documented, not only for reimbursement but to guarantee high quality care in future visits. A patient&#39;s personal health information follows them through subsequent complaints and treatments, and they must be easily understood. This is especially important considering the hundreds of millions of visits, procedures, and hospitalizations annually in the United States."
              headImage={physicianbilling}
              headTitle="Medical Coding"
              box1Title="We Cover All Medical Specialties"
              box2Title={
                <ul>
                  <li>- Obstetrics </li>
                  <li>- Cardiology </li>
                  <li>- Dental </li>
                  <li>- Pathology</li>
                  <li>- Pediatrics1 </li>
                </ul>
              }
              box3Title={
                <ul>
                  <li>- Neurology</li>
                  <li>- Psychiatry </li>
                  <li>- Radiology </li>
                  <li>- Urology</li>
                  <li>- Vascular </li>
                </ul>
              }
            />
          </Route>
          <Route exact path="/service/medical-billing-and-collections">
            <Common
              title="VistaRCM Services"
              text="Medical billing and collection services to maximize your reimbursement rate"
              data={<>
              <br />
              <br />
              <br />
              <p>
              Typical medical billing services may offer little more than generating your medical claims and statements, but at VistaRCM we utilize specific protocols and expertise to allow for the maximum reimbursement of your medical billing services in the most efficient manner with our comprehensive experience in accounts receivable management. We understand the unique problems of physician practices. It's our business, so you can be assured of a long-term commitment from our expert support team. We take the work and the worry out of your medical billing and collections problems. Acting as an extension of your office staff, VistaRCM provides a flexible array of medical billing services to meet your specific needs.
              </p>
              </>}
              headImage={physicianbilling}
              headTitle="Medical Billing And Collections"
            />
          </Route>

          <Route exact path="/service/fee-schedule-evaluations">
            <Template
              title="VistaRCM Services"
              text="Fee schedule evaluations and other profit enhancement services"
              data={<>
              <p>Change seems to be the only constant in healthcare today! The forms you are required to complete this month may be obsolete next month. HMO's and PPO's may dramatically affect your practice's earning potential. Does it seem the harder you work, the less you make? VistaRCM can't change healthcare regulations, but we can help steer your practice so you receive every dollar to which you are entitled. Do you review and update your fee schedule annually? As your revenue cycle management partner we review each of our client’s fee schedules by payor. All government, managed care, commercial payors-etc.</p></>}
              box1Title=" Our practice management software "
              box1Data=" Fee schedule reimbursement rates are loaded into our practice management software at the CPT code level to insure you are being paid based on your contracted rates. In addition for each payor the provider participates with VistaRCM identifies"
              box2Title="How do you track the health payors claim"
              box2Data=" Are you being kept in the know when your payors reduce your reimbursement rates? Together, we can increase your revenue and maximize your profit."
              headImage={physicianbilling}
              headTitle="Medical Billing And Collections"
            />
          </Route>

          <Route exact path="/service/healthcare-contract-management">
            <Design
              title="VistaRCM Services"
              text="Healthcare Contract Management Service - making sure your contract is a winner"
              heading="Managed Care"
              head1="healthcare contract management agreements"
              data1="Dramatic changes in the economics of providing healthcare have created an increased reliance on healthcare contract management agreements, which has afforded VistaRCM the opportunity to ensure that our clients are getting paid appropriately according to their managed care agreements. Gone are the days when physicians could simply trust that they were getting paid fairly and accurately or in accordance with your executed healthcare contract. The reimbursement rate is only one piece of the puzzle."
              head2="We consistently deliver the best healthcare management services"
              data2="Often times there are not only marketing, service and accessibility issues, but there are also other elements such as precisely defining what benefits are covered, stop loss provisions, various incentives and provisions about how members are counted and properly allocated. Healthcare contracts are legal binding documents which need to be reviewed carefully. Many physicians sign contracts without challenging or negotiating payor rates."
              head3=" Key to healthcare contract management"
              data3="Contracting with payors is not just a one-time event and then out of mind. Healthcare contract management involves performing an annual analysis. For instance, identifying your top 5 payors- what is the current reimbursement rate per your healthcare contract? What is the volume by patient encounters and revenue by the payor?"
              //  box1Title = " Our practice management software "
              //  box1Data = " Fee schedule reimbursement rates are loaded into our practice management software at the CPT code level to insure you are being paid based on your contracted rates. In addition for each payor the provider participates with VistaRCM identifies"
              //  box2Title= "How do you track the health payors claim"
              //  box2Data= " Are you being kept in the know when your payors reduce your reimbursement rates? Together, we can increase your revenue and maximize your profit."
              headImage={physicianbilling}
              headTitle="Healthcare Contract Management Service"
            />
          </Route>

          <Route exact path="/service/ar-recovery">
            <Common
              title="VistaRCM Services"
              text="Our AR management consists of AR Analysts and AR follow up representatives."
              data={<>
              <br/>
              <br/>
              <br/>
              
              <p>
              The A/R analytics team is responsible for studying and analyzing denied claims as well as partial payments. Also, if any claim is found to have a coding error, the A/R team corrects it and resubmits the claim.
                </p>
                <br/>
                <p>
                The A/R follow up team on the other hand, constantly communicate with patients, healthcare service providers, and the insurance firms and take necessary actions based on their feedback or responses. The skills and quality of services delivered by the A/R team eventually helps in determining the financial health of a healthcare practice.
                  </p></>
              
              
                
            }
              headImage={physicianbilling}
              headTitle="Medical AR Recovery"
              head1="Stage 1: Initial Evaluation"
              data1="This stage involves the identification and analysis of the claims listed on the A/R aging report. The team reviews the provider's policy and identifies which claims need to be adjusted off."
              head2="Stage 2: Analysis and Prioritizing"
              data2="This phase is initiated once the claims are identified which are marked as uncollectible or for claims where the carrier has not paid according to its contracted rate with the healthcare provider."
              head3="Stage 3: Collection"
              data3="The claims identified to be within the filing limit of the carrier are re-filed after verifying all the necessary billing information such as claims processing address and conformation to other medical billing rules. After completing the posting of payment details for outstanding claims, patient bills are generated as per the client guidelines and then followed up with the patients for payments."
              // text="Most of the medical billing specialists perform the A/R follow-up in a very systematic manner, which is usually conducted in three stages:"
              heading="Three Stages"
            />
          </Route>

          <Route exact path="/service/physician-medical-practice-management">
            <Design
              title="VistaRCM Services"
              text="Physician Practice Management - Accounting services - the cornerstone of managing your physician practice"
              heading="Practice Management"
              head1="Planning For The Future "
              data1="The success and continued growth of your medical practice management depends on financial control. Our job at VistaRCM is to help physician practices of every size - from solo to large groups - monitor their financial growth through a wide range of accounting services."
              head2="Crucial In Medical Physician Practice Management           "
              data2="As professional medical billing company, we provide a thorough analysis of your current accounting systems. With the professional resources of VistaRCM supporting your team, we can offer a full range of audit, cash management, consulting and accounting services."
              head3=" Month-to-month and year-to-year comparison reports           "
              data3="Contracting with payors is not just a one-time event and then out of mind. Healthcare contract management involves performing an annual analysis. For instance, identifying your top 5 payors- what is the current reimbursement rate per your healthcare contract? What is the volume by patient encounters and revenue by the payor?"
              //  box1Title = " Our practice management software "
              //  box1Data = " Fee schedule reimbursement rates are loaded into our practice management software at the CPT code level to insure you are being paid based on your contracted rates. In addition for each payor the provider participates with VistaRCM identifies"
              //  box2Title= "How do you track the health payors claim"
              //  box2Data= " Are you being kept in the know when your payors reduce your reimbursement rates? Together, we can increase your revenue and maximize your profit."
              headImage={physicianbilling}
              headTitle="Physician Practice Management"
            />
          </Route>

          <Route exact path="/service/eligibility-verification">
            <Template
              // title="VistaRCM Services"
              text="Eligibility and Benefit Verification"
              data="Eligibility and benefit verification is vital to ensure accurate and timely receipt of information regarding insurance coverage, and determining the patient's responsibility to pay for healthcare services. To improve cash flow, physicians need to verify eligibility and benefit coverage before claim submission. Our team can provide accurate real-time data on patient benefits before the visit so that you give an estimation to the patient for our of pocket expenses (Copay, Deductible and Coinsurance) before even billing the claim and as well as collect the payments upfront from patients at the time of visit. We provide professional solutions to help you "
              headImage={physicianbilling}
              headTitle="Eligibility and Benefit Verification"
              // Image={Eligibility}
              box1Title={
                <ul>
                  
                  
                  <li>Improve patient care and satisfaction</li>
               
                </ul>
              }
              box2Title={
                <ul>
                  
                  <li>Minimize delayed payments</li>
                  
               
                </ul>
              }
              box3Title={
                <ul>
                  <li>Avoid Patient follow-up’s on payments</li>
               
                </ul>
              }
              box4Title={
                <ul>
                  <li>Reduce denials</li>
               
                </ul>
              }
              box5Title={
                <ul>
                  <li>Collect payments upfront at the time of visit</li>
               
                </ul>
              }
              box6Title={
                <ul>
                  <li>Enhance workflow</li>
               
                </ul>
              }
            />
          </Route>

          <Route exact path="/service/revenue-cycle-management">
            <Common
              title="VistaRCM Services"
              text="Pre-Authorization"
              data={
                <>
                <p>
                As a medical billing professional, dealing with prior authorization is a necessary part of the job. Prior authorization (also known as preauthorization) is the process of getting an agreement from the payer to cover specific services before the service is performed. 
                </p>
                <br />
                <p>
                Prior authorization is a process required for the providers to determine coverage and obtain approval or authorization from an insurance carrier to pay for a proposed treatment or service. This approval is based on medical necessity, medical appropriateness and benefit limits. For example, if an ordering physician has to obtain pre-authorization from an insurance company for the use of a particular drug, the physician must send a pre-authorization request so that the insurer can determine whether the drug is medically appropriate and safe to use before agreeing to pay. The time required for obtaining a pre-authorization from an insurance company depends upon the requirements of the health plan. Generally, it takes five to thirty days for approval. Our goal is to ensure maximum and speedy reimbursement. For that, we verify the patient’s payment benefits and coverage for specific procedures prior to the appointment.
                </p>
                </>
              }
              headImage={physicianbilling}
              headTitle=" Pre-Authorization        "
              show={false}
            />
          </Route>

          <Route exact path="/service/healthcare-denial-management">
            <Design
              title="VistaRCM Services"
              text="Denial Management Services"
              heading="Healthcare Denial Management"
              head1="Planning For The Future "
              data1="VistaRCM offers a full-suite of healthcare denial management services that include AR follow ups, claims status checks, resolution of denied claims, preparing an appeal letters etc. – all done with one goal in mind which is to collect all dollars due you for medical billing services rendered. "
              head2="How To Manage Denied Claims?"
              data2="Due to lack of time and expert knowledge on the healthcare denial management reimbursement domain, many physicians and facilities fail to manage denied claims and resubmit them. Denial Managements requires expert knowledge and timely execution. Therefore, only dedicated and skilled professionals can handle them efficiently, successfully and timely. VistaRCM deploys a dedicated team of employees who will manage denials promptly and provide efficient denial management services. These experts analyze the possible denial trends and also initiate ‘global action’ that can impact many claims with a simple fix to prevent repetition of the same denials. Our team of healthcare denial management experts; track denials, identify root causes and execute denial management preventions strategies. Additionally, it is important to provide feedback to appropriate internal departments personnel and physicians on denial management trends and findings. Medical practices which lack a focused strategy for denial management are most likely to see unfavorable results, as is often too common, left to sit and eventually written off as uncollectable."
              head3=" Denial Management Solutions For Hospitals And Practice!           "
              data3="VistaRCM has established a workflow for hospitals and practice that tracks claims as they enter and leave your system. VistaRCM does extensive groundwork to correct ambiguous claims and avoid the chances of them getting rejected again. To accomplish this task, they perform a thorough root-cause analysis, decide on the right solution for fixing the particular issue, take the corrective action and submit the claim for payment."
              //  box1Title = " Our practice management software "
              //  box1Data = " Fee schedule reimbursement rates are loaded into our practice management software at the CPT code level to insure you are being paid based on your contracted rates. In addition for each payor the provider participates with VistaRCM identifies"
              //  box2Title= "How do you track the health payors claim"
              //  box2Data= " Are you being kept in the know when your payors reduce your reimbursement rates? Together, we can increase your revenue and maximize your profit."
              headImage={physicianbilling}
              headTitle="Denial Management Services"
            />
          </Route>

          <Route exact path="/service/phycisian-credentialing">
            <Design
              title="VistaRCM Services"
              text="Providers Credentialing"
              heading="Physician/Provider Credentialing Services"
              head1="When is Provider Credentialing necessary?"
              data1={
                <ul>
                  <li>- When you start a new practice or add a location</li>
                  <li>- When you relocate or join a new practice</li>
                  <li>- When you add a new provider to your existing group</li>
                  <li>- When you want to become a participating provider</li>
                  <li>- When carriers request updated information</li>
                </ul>
              }
              head2="Why should you outsource physician credentialing?           "
              data2={
                <ul>
                  <li>
                    The complexity of the Physicians credentialing process which
                    can differ from carrier to carrier or state to state
                  </li>
                  <li>
                    The long processing time Dedicated manager assigned to your
                    project
                  </li>
                  <li>
                    We make all the phone calls, follow-ups, and submit all the
                    applications, e-mails and faxes for you
                  </li>
                  <li>
                    We maintain all of your documents on our secured database
                  </li>
                  <li>Maintain and update CAQH profile</li>
                </ul>
              }
              head3="Advantage of outsourcing physician credentialing to VistaRCM:           "
              data3={
                <ul>
                  <li>
                    Specialized Provider credentialing department working on
                    your application
                  </li>
                  <li>
                    Consistent follow up on all applications to insure timely
                    process
                  </li>
                  <li>
                    Requesting and obtaining new fee schedules annually to
                    insure that reimbursements are in accordance with the
                    contracted rates
                  </li>
                </ul>
              }
              //  box1Title = " Our practice management software "
              //  box1Data = " Fee schedule reimbursement rates are loaded into our practice management software at the CPT code level to insure you are being paid based on your contracted rates. In addition for each payor the provider participates with VistaRCM identifies"
              //  box2Title= "How do you track the health payors claim"
              //  box2Data= " Are you being kept in the know when your payors reduce your reimbursement rates? Together, we can increase your revenue and maximize your profit."
              headImage={physicianbilling}
              headTitle="Physician/Provider Credentialing Services"
            />
          </Route>

          <Route exact path="/about/blogs">
            <Blog />
          </Route>

          <Route exact path="/about/testimonials">
            <TestimonialsPage />
          </Route>

          <Route exact path="/aboutvistarcm">
            <About />
          </Route>

          <Route exact path="/about/careers">
            <Careers />
          </Route>

          <Route exact path="/service/billing-Denial Management-A/R">
            <MainService 
            headTitle="Billing, Denial Management and A/R Follow Up"
            headImage={physicianbilling}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
};
export default App;
