import { blog1, blog2, blog3, blog4, blog5, bloghero, blog6 } from "../assets";
import { Footer } from "../components";

const Blog = () => {
  return (
    <div>
      <section className="bg-white text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900"
          >
            <img
              src={bloghero}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              Solutions for the Revenue Cycle and clinical labor shortage
              </h3>
              <span className="text-xs text-gray-400">December 27, 2022</span>
              <p>
              As the healthcare operations and finance leaders struggle to find the resources for care delivery and administrative processes, hospitals and healthcare systems face a new challenge – unprecedented inflation. As inflationary pressures combine with a sub-optimal revenue cycle, they must outsource RCM functions and choose partners who can provide trained and certified resources.
              </p>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src={blog2}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In-house Medical Billing vs. Outsourced RCM                </h3>
                <span className="text-xs text-gray-400">August 21, 2022</span>
                <p>
                As you expand your medical practice, at some point, you are bound to be befuddled by the task of choosing to either continue with the in-house medical billing process or outsource it to the experts. 
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src={blog1}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                Role of medical billing software in RCM services                </h3>
                <span className="text-xs text-gray-400">September 02, 2022</span>
                <p>
                Ensuring efficient revenue cycle management (RCM) along with excellent patient care is no easy task. If you are looking for a way to balance these functions at your healthcare establishment, then consider getting medical billing software for the revenue cycle management of your business. 
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src={blog3}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                10 Ways to Improve Your Billing Process                </h3>
                <span className="text-xs text-gray-400">July 23, 2022</span>
                <p>
                The success of your medical practice largely depends on an efficient billing process. But challenges such as complex processes, delinquent claims and denied claims can obstruct your business’s cash flow. However, do not lose heart in the face of such challenges as there are many ways to overcome them and improve your revenue cycle.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src={blog4}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                5 Common Reasons for Claim Denials                </h3>
                <span className="text-xs text-gray-400">November 24, 2022</span>
                <p>
                When a patient's insurance claim is denied, not only can your cash flow be affected, the relationship with your patient can be damaged as well. Some claim denials can be successfully appealed, but even when appeals succeed, they can temporarily leave claim status up in the air - something both your practice and your patient would like to avoid.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src={blog5}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                What is fqhc medical billing, and why is it important?                </h3>
                <span className="text-xs text-gray-400">May 25, 2022</span>
                <p>
                Federally qualified health centers (FHQCs) are federally funded health centers that provide medical care for historically underserved areas, ensuring everyone has the right to healthcare services. These facilities provide affordable access to primary and preventative care for patients and qualify for reimbursement through Medicare or Medicaid.  FHQCs must meet several requirements for not only the […]


                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src={blog6}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                How to optimize your lab’s billing and revenue cycle management                </h3>
                <span className="text-xs text-gray-400">October 26, 2022</span>
                <p>
                Maintaining your facility’s revenue requires a high-level understanding of the complete revenue cycle, from the moment a patient presents, to the point at which you receive payment from the insurance company and patient. You can optimize your laboratory’s billing and revenue cycle management by working with an expert that knows your specific needs.


                </p>
              </div>
            </a>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 text-gray-400"
            >
              Load more posts...
            </button>
          </div>
        </div>
      </section>
      
    </div>
  );
};
export default Blog;
