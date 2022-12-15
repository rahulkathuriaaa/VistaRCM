// import styles from "./style";
// import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Hero } from "./components";
// import MainHeader from "./components/MainHeader";

import {Switch,Route} from "react-router-dom";
import styles from "./style";
import MainHeader from "./components/MainHeader";
import Home from "./Pages/Home";
import AboutUsPage from "./Pages/AboutUsPage";
import Common from "./Pages/Common";
import { physicianbilling } from "./assets";
import Template from "./Pages/Template";
import Design from "./Pages/Design";




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



const App = () =>{
  return(
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <MainHeader/>
      </div>
    </div>
    <main>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/about'>
          <AboutUsPage/>
        </Route>
        <Route exact path='/service/physician-billing-services'>
          <Common
           title="VistaRCM Services"
           text = "Physicians Billing Services"
           data = " Deciding to outsource your medical billing and selecting a Revenue Cycle Company (RCM) can be one of the most important decisions you will ever make. In making this decision you must look for a company with longevity in the industry, a varied client base, excellent client references and who has a management team with expertise in medical billing, coding and collections. VistaRCM is such a company who meets these criterias, who is currently providing RCM services to over 600 providers in multiple states across the country. VistaRCM, with over 20 years of successful operational history should be that billing partner as we not only provide proven expertise we can also provide the full cycle of medical billing including the most advanced software and technology."
           headImage = {physicianbilling}
           headTitle = "Physicians Billing Services"
        />
        </Route>
        <Route exact path='/service/medical-insurance-billing'>
          <Template
           title="VistaRCM Services"
           text = "Medical Insurance Billing"
           data = " Medical insurance billing and coding is one of the most crucial functions for a medical practice and it needs dedicated human resource and time for a streamlined process. When your practice cannot afford to dedicate the time and resources for medical insurance billing, it is essential that you outsource medical insurance billing to medical billing companies that can deliver outstanding results.VistaRCM, one of the leading medical billing companies in Florida, provides end-to-end medical insurance billing and coding services to physician groups across nation. VistaRCM can suit your practice requirements and deliver outstanding results that enhance the revenue of your practice."
           headImage = {physicianbilling}
           headTitle = "Medical Insurance Billing & Coding"
        />
        </Route>
        <Route exact path='/service/medical-billing-and-collections'>
          <Common
           title="VistaRCM Services"
           text = "Medical billing and collection services to maximize your reimbursement rate"
           data = "Typical medical billing services may offer little more than generating your medical claims and statements, but at VistaRCM we utilize specific protocols and expertise to allow for the maximum reimbursement of your medical billing services in the most efficient manner with our comprehensive experience in accounts receivable management. We understand the unique problems of physician practices. It's our business, so you can be assured of a long-term commitment from our expert support team. We take the work and the worry out of your medical billing and collections problems. Acting as an extension of your office staff, VistaRCM provides a flexible array of medical billing services to meet your specific needs."
           headImage = {physicianbilling}
           headTitle = "Medical Billing And Collections"
        />
        </Route>

        <Route exact path='/service/fee-schedule-evaluations'>
          <Template
           title="VistaRCM Services"
           text = "Fee schedule evaluations and other profit enhancement services"
           data = "Change seems to be the only constant in healthcare today! The forms you are required to complete this month may be obsolete next month. HMO's and PPO's may dramatically affect your practice's earning potential. Does it seem the harder you work, the less you make? VistaRCM can't change healthcare regulations, but we can help steer your practice so you receive every dollar to which you are entitled. Do you review and update your fee schedule annually? As your revenue cycle management partner we review each of our client’s fee schedules by payor. All government, managed care, commercial payors-etc."
           box1Title = " Our practice management software "
           box1Data = " Fee schedule reimbursement rates are loaded into our practice management software at the CPT code level to insure you are being paid based on your contracted rates. In addition for each payor the provider participates with VistaRCM identifies"
           box2Title= "How do you track the health payors claim"
           box2Data= " Are you being kept in the know when your payors reduce your reimbursement rates? Together, we can increase your revenue and maximize your profit."
           headImage = {physicianbilling}
           headTitle = "Medical Billing And Collections"
        />
        </Route>

        <Route exact path='/service/healthcare-contract-management'>
          <Design
           title="VistaRCM Services"
           text = "Healthcare Contract Management Service - making sure your contract is a winner"
           heading="Managed Care"
           head1="healthcare contract management agreements"
           data1 = "Dramatic changes in the economics of providing healthcare have created an increased reliance on healthcare contract management agreements, which has afforded VistaRCM the opportunity to ensure that our clients are getting paid appropriately according to their managed care agreements. Gone are the days when physicians could simply trust that they were getting paid fairly and accurately or in accordance with your executed healthcare contract. The reimbursement rate is only one piece of the puzzle."
           head2="We consistently deliver the best healthcare management services"
           data2 = "Often times there are not only marketing, service and accessibility issues, but there are also other elements such as precisely defining what benefits are covered, stop loss provisions, various incentives and provisions about how members are counted and properly allocated. Healthcare contracts are legal binding documents which need to be reviewed carefully. Many physicians sign contracts without challenging or negotiating payor rates."
           head3=" Key to healthcare contract management"
           data3 = "Contracting with payors is not just a one-time event and then out of mind. Healthcare contract management involves performing an annual analysis. For instance, identifying your top 5 payors- what is the current reimbursement rate per your healthcare contract? What is the volume by patient encounters and revenue by the payor?"
          //  box1Title = " Our practice management software "
          //  box1Data = " Fee schedule reimbursement rates are loaded into our practice management software at the CPT code level to insure you are being paid based on your contracted rates. In addition for each payor the provider participates with VistaRCM identifies"
          //  box2Title= "How do you track the health payors claim"
          //  box2Data= " Are you being kept in the know when your payors reduce your reimbursement rates? Together, we can increase your revenue and maximize your profit."
           headImage = {physicianbilling}
           headTitle = "Healthcare Contract Management Service"
        />
        </Route>

        <Route exact path='/service/ar-recovery'>
          <Common
           title="VistaRCM Services"
           text = "The challenging part of Medical AR recovery"
           data = "Today, many physicians find their medical practice or facilities generating expected or growing monthly charges but are not realizing the same growth in their reoccurring cash flow.Unless specific and consistent active accounts receivable follow up on the current billings is initiated, it is common to find a provider with excessive amounts in medical A/R that are greater than 180 days outstanding. Usually the volume of outstanding claims and the time it takes to research, correct, appeal, and/or re-file the claims will take much longer than anticipated.  A limited number of staff devoted to this task will not be able to accomplish the goal, which is to substantially reduce/eliminate the outstanding A/R and collect as much money as possible in a short period of time.The medical A/R program offered by VistaRCM overcomes the problems that traditionally hinder collection efforts by the individual providers. VistaRCM pursues these accounts by assigning a full team of individuals to blitz them."
           headImage = {physicianbilling}
           headTitle = "Medical AR Recovery"
        />
        </Route>

        <Route exact path='/service/physician-medical-practice-management'>
          <Design
           title="VistaRCM Services"
           text = "Physician Practice Management - Accounting services - the cornerstone of managing your physician practice"
           heading="Practice Management"
           head1="Planning For The Future "
           data1 = "The success and continued growth of your medical practice management depends on financial control. Our job at VistaRCM is to help physician practices of every size - from solo to large groups - monitor their financial growth through a wide range of accounting services."
           head2="Crucial In Medical Physician Practice Management           "
           data2 = "As professional medical billing company, we provide a thorough analysis of your current accounting systems. With the professional resources of VistaRCM supporting your team, we can offer a full range of audit, cash management, consulting and accounting services."
           head3=" Month-to-month and year-to-year comparison reports           "
           data3 = "Contracting with payors is not just a one-time event and then out of mind. Healthcare contract management involves performing an annual analysis. For instance, identifying your top 5 payors- what is the current reimbursement rate per your healthcare contract? What is the volume by patient encounters and revenue by the payor?"
          //  box1Title = " Our practice management software "
          //  box1Data = " Fee schedule reimbursement rates are loaded into our practice management software at the CPT code level to insure you are being paid based on your contracted rates. In addition for each payor the provider participates with VistaRCM identifies"
          //  box2Title= "How do you track the health payors claim"
          //  box2Data= " Are you being kept in the know when your payors reduce your reimbursement rates? Together, we can increase your revenue and maximize your profit."
           headImage = {physicianbilling}
           headTitle = "Physician Practice Management"
        />
        </Route>

        <Route exact path='/service/eligibility-verification'>
          <Template
           title="VistaRCM Services"
           text = "Healthcare Insurance Eligibility Verification           "
           data = "Insurance Eligibility Verification is more critical today than ever with the advent of the Affordable Care ACT. In today’s insurance eligibility verification reality an ACA patient can have insurance one month and not pay their premiums in month 2 and 3. Qualified health plans are required to pay all claims for services rendered in the first month of the grace period (eligibility).Carriers will spend claims in the second or third months, at which point the patient must pay the provider for service already rendered or pay their insurance premium. If the patient cannot afford the payment for their premium, then any physician claims pending during this second and third month will go unpaid causing an increase in bad debt collections. "
           box1Data = " Insurance eligibility verification process can be accomplished via a call to the Insurance Company (payer), via websites (payer or EDI) or through online software currently integrated in many medical billing systems. Through accurate Insurance Eligibility Insurance Verification, revenue cycle management can be improved by reducing the number of rejected medical claims and improving the cash flow to the Facility or Providers. There are many missed opportunities to secure payment and reduce staff time when patient insurance eligibility verification is not performed before service is rendered. It is also very important to keep your returning patient’s records up to date. Personal information such as phone number, address and insurance coverage information can change since you last saw the patient. Therefore, always verify the information on file is current and up to date."
           box2Data= " VistaRCM has been offering Insurance Eligibility Verification services to its clients for more than a decade. The service is offered as part of the full revenue cycle management or as a ‘stand-alone’ service if needed. VistaRCM offers this service at two levels - the first level is a basic insurance eligibility verification that gets coverage details of the patient in addition to the co-pays and deductibles applicable. The second level is much more in-depth and involves the gathering of ‘code specific’ eligibility with annual max or lifetime limits and authorizations when required. Insurance eligibility verification along with benefits information before services are rendered leads to fewer claim rejections and denials, Insurance eligibility verification when leveraged with our billing and coding services will increase clean claims, improve cash flow, minimize bad debt and increase patient satisfaction.           "
           headImage = {physicianbilling}
           headTitle = "Healthcare Insurance Eligibility Verification"
        />
        </Route>

        <Route exact path='/service/revenue-cycle-management'>
          <Common
           title="VistaRCM Services"
           text = "Revenue Cycle Management Company (RCM)"
           data = "VistaRCM is one of the few healthcare revenue cycle management companies that really ‘walk the talk’! With over 27 years of the experience providing RCM services to hospitals, physicians and physician groups under the same professional management, Our national revenue cycle management company has served and increased the revenue of more than hundreds of providers. The Providers serviced by VistaRCM range from Solo practices, Group practices, IPAs, large Medical Centers, Surgery Centers, Radiology groups, Anesthesiology groups, Pain Management centers etc. VistaRCM has experience and does billing for 25+ specialties in multiple states across the country."
           headImage = {physicianbilling}
           headTitle = "Revenue Cycle Management Company (RCM)           "
        />
        </Route>

        <Route exact path='/service/healthcare-denial-management'>
          <Design
           title="VistaRCM Services"
           text = "Denial Management Services           "
           heading="Healthcare Denial Management           "
           head1="Planning For The Future "
           data1 = "VistaRCM offers a full-suite of healthcare denial management services that include AR follow ups, claims status checks, resolution of denied claims, preparing an appeal letters etc. – all done with one goal in mind which is to collect all dollars due you for medical billing services rendered. "
           head2="How To Manage Denied Claims?"
           data2 = "Due to lack of time and expert knowledge on the healthcare denial management reimbursement domain, many physicians and facilities fail to manage denied claims and resubmit them. Denial Managements requires expert knowledge and timely execution. Therefore, only dedicated and skilled professionals can handle them efficiently, successfully and timely. VistaRCM deploys a dedicated team of employees who will manage denials promptly and provide efficient denial management services. These experts analyze the possible denial trends and also initiate ‘global action’ that can impact many claims with a simple fix to prevent repetition of the same denials. Our team of healthcare denial management experts; track denials, identify root causes and execute denial management preventions strategies. Additionally, it is important to provide feedback to appropriate internal departments personnel and physicians on denial management trends and findings. Medical practices which lack a focused strategy for denial management are most likely to see unfavorable results, as is often too common, left to sit and eventually written off as uncollectable."
           head3=" Denial Management Solutions For Hospitals And Practice!           "
           data3 = "VistaRCM has established a workflow for hospitals and practice that tracks claims as they enter and leave your system. VistaRCM does extensive groundwork to correct ambiguous claims and avoid the chances of them getting rejected again. To accomplish this task, they perform a thorough root-cause analysis, decide on the right solution for fixing the particular issue, take the corrective action and submit the claim for payment."
          //  box1Title = " Our practice management software "
          //  box1Data = " Fee schedule reimbursement rates are loaded into our practice management software at the CPT code level to insure you are being paid based on your contracted rates. In addition for each payor the provider participates with VistaRCM identifies"
          //  box2Title= "How do you track the health payors claim"
          //  box2Data= " Are you being kept in the know when your payors reduce your reimbursement rates? Together, we can increase your revenue and maximize your profit."
           headImage = {physicianbilling}
           headTitle = "Denial Management Services"
        />
        </Route>

        <Route exact path='/service/phycisian-credentialing'>
          <Design
           title="VistaRCM Services"
           text = "Physician Credentialing"
           heading="Physician/Provider Credentialing Services"
           head1="When is Provider Credentialing necessary?"
           data1 = {<ul>
            <li>
            When you start a new practice or add a location
            </li>
            <li>
            When you relocate or join a new practice
            </li>
            <li>
            When you add a new provider to your existing group
            </li>
            <li>
            When you want to become a participating provider
            </li>
            <li>
            When carriers request updated information
            </li>
            </ul>}
           head2="Why should you outsource physician credentialing?           "
           data2 = {<ul>
            <li>
            The complexity of the Physicians credentialing process which can differ from carrier to carrier or state to state
            </li>
            <li>

            The long processing time Dedicated manager assigned to your project
            </li>
            <li>
            We make all the phone calls, follow-ups, and submit all the applications, e-mails and faxes for you
            </li>
            <li>
            We maintain all of your documents on our secured database
            </li>
            <li>
            Maintain and update CAQH profile
            </li>
            </ul>}
           head3="Advantage of outsourcing physician credentialing to MGSI:           "
           data3 = {<ul>
            <li>
            Specialized Provider credentialing department working on your application
            </li>
            <li>
            Consistent follow up on all applications to insure timely process
            </li>
            <li>
            Requesting and obtaining new fee schedules annually to insure that reimbursements are in accordance with the contracted rates
            </li>
          
            </ul>}
          //  box1Title = " Our practice management software "
          //  box1Data = " Fee schedule reimbursement rates are loaded into our practice management software at the CPT code level to insure you are being paid based on your contracted rates. In addition for each payor the provider participates with VistaRCM identifies"
          //  box2Title= "How do you track the health payors claim"
          //  box2Data= " Are you being kept in the know when your payors reduce your reimbursement rates? Together, we can increase your revenue and maximize your profit."
           headImage = {physicianbilling}
           headTitle = "Physician/Provider Credentialing Services"
        />
        </Route>

      </Switch>
    </main>
    </div>
  )
}
export default App;