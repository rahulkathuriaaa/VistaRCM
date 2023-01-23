

import { Switch, Route } from "react-router-dom";
import styles from "./style";
import MainHeader from "./components/MainHeader";
import Home from "./Pages/Home";
import AboutUsPage from "./Pages/AboutUsPage";
import Common from "./Pages/Common";
import { Eligibilty, medicalcoding, physicianbilling } from "./assets";
import Template from "./Pages/Template";
import Design from "./Pages/Design";
import Blog from "./Pages/Blog";
import TestimonialsPage from "./Pages/TestimonialsPage";
import About from "./Pages/About";
import Careers from "./Pages/Careers";
import MainService from "./Pages/MainService";
import TemplateCopy from "./Pages/TemplateCopy";



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

          <Route exact path="/service/medical-coding">
            <TemplateCopy
              text="Medical Coding"
              data="Medical coding is the transformation of healthcare diagnosis, procedures, medical services, and equipmentintouniversalmedical alphanumeric codes. The diagnoses and procedure codes are taken from medical record documentation, such as transcription of physician&#39;s notes, laboratory and radiologic results, etc. Medical coding professionals help ensure the codes are applied correctly during the medical billing process, which includes abstracting the information from documentation,assigning the appropriate codes, and creating a claim to be paid by insurance carriers. A patient&#39;s diagnosis, test results, and treatment must be documented, not only for reimbursement but to guarantee high quality care in future visits. A patient&#39;s personal health information follows them through subsequent complaints and treatments, and they must be easily understood. This is especially important considering the hundreds of millions of visits, procedures, and hospitalizations annually in the United States."
              headImage={physicianbilling}
              hero={medicalcoding}
              headTitle="Medical Coding"
              box1Title="We Cover All Medical Specialties"
        
            />
          </Route>
          
         

          

         

          <Route exact path="/service/eligibility-verification">
            <Template
              text="Eligibility and Benefit Verification"
              hero={Eligibilty}
              data="Eligibility and benefit verification is vital to ensure accurate and timely receipt of information regarding insurance coverage, and determining the patient's responsibility to pay for healthcare services. To improve cash flow, physicians need to verify eligibility and benefit coverage before claim submission. Our team can provide accurate real-time data on patient benefits before the visit so that you give an estimation to the patient for our of pocket expenses (Copay, Deductible and Coinsurance) before even billing the claim and as well as collect the payments upfront from patients at the time of visit. We provide professional solutions to help you "
              headImage={physicianbilling}
              headTitle="Eligibility and Benefit Verification"
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

          

          <Route exact path="/service/phycisian-credentialing">
            <Design
          
              heading="Provider Credentialing Services"
              head1="When is Provider Credentialing necessary?"
              data1={
                <ul>
                  <li> When you start a new practice or add a location</li>
                  <li> When you relocate or join a new practice</li>
                  <li> When you add a new provider to your existing group</li>
                  <li> When you want to become a participating provider</li>
                  <li> When carriers request updated information</li>
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
                    applications, <br/>e-mails and faxes for you
                  </li>
                  <li>
                   We maintain all of your documents on our secured database
                  </li>
                  <li> Maintain and update CAQH profile</li>
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
              headImage={physicianbilling}
              headTitle="Provider Credentialing Services"
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
