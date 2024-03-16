import React, { useState } from "react"
import RowNavigation from "./RowNavigation"
import WomanSupportIMG from "../../assets/images/woman-support.png"
import Card from "./Card"
import Login from "../../assets/images/Login.png"
import Home from "../../assets/images/Vector.png"
import Dashboard from "../../assets/images/Dashboard.png"
import Membership from "../../assets/images/Membership Zone.png"
import EmployeeZone from "../../assets/images/Employee Zone.png"
import FinanceZone from "../../assets/images/Finance Zone.png"
import MembershipZone from "../../assets/images/Union.png"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { Link } from "react-router-dom"




const FAQ = () => {
  const FAQdata = [
    {
      id: 1,
      name: "Login",
      sub: "View answers",
      img: Login,
      css: "bg-blue-50 text-blue-400",
      Faq: {
        name: "Login",
        Q1: "How do I log in to the platform?",
        A1: "Once our team gives you access, you can log in with your registered email ID and password.",
        Q2: "What should I do if I forget my password?",
        A2: "You can use the 'Forgot password' option on the login page to reset your password or contact the support team to change your password.",
        Q3: "Is there an option to stay signed in on my device?",
        A3: "Yes, you can select the 'Remember this device' checkbox to stay signed in on the device you're using. Please make sure to secure your login with the 2FA method.",
      },
    },
    {
      id: 2,
      name: "Home Page",
      sub: "View answers",
      img: Home,
      css: "bg-rose-50 text-rose-500",
      Faq: {
        name: "Home Page",
        Q1: "How do I access different sections of the platform from the Home page?",
        A1: "You can navigate using the top navigation menu, which includes options like search, Zone (Client, Employee, Finance, Membership), support, booking, notifications, and settings.",
        Q2: "Where can I find support if I encounter any issues while using the platform?",
        A2: "You can access support by clicking on the 'Support' option, which directs you to the support page our team’s ticket system and resolve with a day.",
        Q3: "How can I manage my profile and settings on the platform?",
        A3: "You can access your profile and settings by clicking on the profile icon, which allows you to view and edit your profile information, banking details, and account settings.",
        Q4: "What security features are available to protect my account?",
        A4: "The platform offers various security options such as two-factor authentication, email recovery, mobile number recovery, and device management under the security settings.",
        Q5: "Where can I find guidance on how to use the platform effectively?",
        A5: "You can refer to the 'How to use?' section, which provides detailed instructions on navigating the platform, accessing the dashboard, and using different apps within the four zones.",
      },
    },
    {
      id: 3,
      name: "Dashboard",
      sub: "View answers",
      img: Dashboard,
      css: "bg-green-50 text-green-500",
      Faq: {
        name: "Dashboard",
        Q1: "How can I view key statistics about my clients and finances on the Dashboard?",
        A1: "You can find information such as total clients, today's entries, total earnings, and total expenses displayed in four boxes with icons on the Dashboard.",
        Q2: "Where can I track my revenue updates on the platform?",
        A2: "Revenue updates are available on the Dashboard, providing real-time information on your income for the current month.",
        Q3: "How do I access details about recent entries and projects?",
        A3: "Recent entries info is displayed on the Dashboard, referencing the top project, allowing you to stay updated on recent activities.",
        Q4: "Is there a feature to track client growth over time?",
        A4: "Yes, you can view a graph displaying new clients over the last three months, providing insights into client acquisition trends.",
        Q5: "Where can I find information about employee salaries per month?",
        A5: "Employee salary per month details is available on the Dashboard, allowing you to monitor and manage payroll effectively.",
      },
    },
    {
      id: 4,
      name: "Client Zone",
      sub: "View answers",
      img: Membership,
      css: "bg-orange-50 text-orange-500",
      Faq: {
        name: "Client Zone",
        Q1: "Where can I access detailed information about individual clients?",
        A1: "You can view and edit client profiles, including personal information, emergency contacts, health details, membership information, and contract uploads, on the Client Profile page.",
        Q2: "How do I manage client payments and invoices?",
        A2: "Payment details, including payment frequency, due dates, and payment modes, are available in a table format. You can view invoices, make payments, and add new invoices directly from the platform.",
        Q3: "Is there a feature to track client attendance?",
        A3: "Yes, the attendance list includes a calendar showing present and absent days. You can create events and view recent activity in a table format.",
        Q4: "How does the client check-in process work?",
        A4: "After scanning a QR code, clients fill out a validation form for mobile number verification. Once approved, they proceed to provide their name and log time, receiving a confirmation message.",
      },
    },
    {
      id: 5,
      name: "Employee Zone",
      sub: "View answers",
      img: EmployeeZone,
      css: "bg-blue-50 text-blue-500",
      Faq: {
        name: "Employee Zone",
        Q1: "How can I quickly assess employee status and payroll information?",
        A1: "The Employee Zone offers four boxes with icons showing total employees, present and absent statuses for today, and estimated salaries for the current month.",
        Q2: "Where can I access detailed profiles of individual employees?",
        A2: "You can view and manage employee profiles, including personal information, roles, work schedules, contracts, and emergency contacts, on the Employee Profile page.",
        Q3: "How do I handle employee salary information and payments?",
        A3: "Salary details, including payslips and payment statuses, are available on the Salary Info page. You can view payslips, make payments, and add new salary entries.",
        Q4: "How can I manage employee bank details securely?",
        A4: "Bank details for employees can be listed and managed on the Bank Details page, ensuring secure handling of financial information.",
        Q5: "What is the process for employee attendance check-in?",
        A5: "After scanning a QR code, employees fill out a validation form for mobile number or employee ID verification. Once approved, attendance is marked, and a confirmation message is displayed.",
      },
    },
    {
      id: 6,
      name: "Finance Zone",
      sub: "View answers",
      img: FinanceZone,
      css: "bg-red-50 text-red-500",
      Faq: {
        name: "Finance Zone",
        Q1: "How can I track financial performance and income trends?",
        A1: "The Finance Zone offers four boxes with icons displaying total payments, outstanding payments, projected income, and actual revenue for this month and overall.",
        Q2: "Where can I view details of all income transactions?",
        A2: "You can find a table listing all paid invoices from clients in the Income section, providing a comprehensive overview of income sources.",
        Q3: "How do I add new income entries to the platform?",
        A3: "You can add income by filling out the details in the Add Income popup, including invoice number, payment date, customer name, amount, subscription plan, and payment status.",
        Q4: "Where can I track and manage all expenses incurred?",
        A4: "The Expenses section contains a table listing all client expenses, allowing you to monitor and manage expenditures effectively.",
        Q5: "How do I record new expenses on the platform?",
        A5: "You can add expenses by entering relevant details in the Add Expense popup, similar to the content provided in the reference link, including expense details and payment status.",
      },
    },
    {
      id: 7,
      name: "Membership Zone",
      sub: "View answers",
      img: MembershipZone,
      css: "bg-green-50 text-green-500",
      Faq: {
        name: "Membership Zone",
        Q1: "How can I explore and choose a suitable membership plan?",
        A1: "You can access our pricing page, which provides a detailed listing of available plans along with descriptions to help you make an informed decision.",
        Q2: "How do I upgrade or change my current membership plan?",
        A2: "Click on the 'My current plan' button, which will direct you to the Plans and Billing section where you can view and manage your current plan.",
        Q3: "What is the checkout process for purchasing a membership plan?",
        A3: "Our checkout page offers a simple one-page form with payment options, ensuring a quick and hassle-free experience for purchasing a plan.",
        Q4: "Where can I view details of my current membership plans?",
        A4: "You can find a list of your current plans in the My Plans section, with the option to view detailed information about each plan by clicking on it.",
        Q5: "How can I track my payment history and billing details?",
        A5: "The Billings section provides a comprehensive list of your payment history, including view and download options for each transaction, allowing you to keep track of your finances effectively.",
      },
    },
  ]

  const [selectedFAQ, setSelectedFAQ] = useState(FAQdata[0])
  const [expanded, setExpanded] = useState(null)

  
  const handleCardClick = faq => {
    setSelectedFAQ(faq)
  }

  // console.log(FAQdata.faq,selectedFAQ)

  return (
    <div className="container mx-auto pt-5 pb-5">
      <div className="mb-12">
        <RowNavigation />
      </div>
      <section className="">
        <div className="grid sm:grid-cols-7 grid-flow-row pb-6 my-10 gap-5">
          {FAQdata.map(obj => {
            return <Card data={obj} key={obj.id} onClick={() => handleCardClick(obj)}></Card>
          })}
        </div>
      </section>
      <div className="">
        {selectedFAQ && (
          <div className="my-5">
            <h2 className="font-semibold text-xl my-5">FAQ related to {selectedFAQ.name}</h2>
            {Object.keys(selectedFAQ.Faq).map((key, index) => {
              if (key.startsWith("Q")) {
                const questionNumber = key.substring(1)
                return (
                  <Accordion style={{ margin: 0}} key={index} expanded={expanded === selectedFAQ["Faq"][`Q${questionNumber}`]} onChange={() => setExpanded(selectedFAQ["Faq"][`Q${questionNumber}`])}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon className="" />}
                      className="font-bold text-white p-2 rounded-bl-md rounded-br-md relative cursor-pointer"
                    >
                      {selectedFAQ["Faq"][`Q${questionNumber}`]}
                    </AccordionSummary>
                    <AccordionDetails>{selectedFAQ["Faq"][`A${questionNumber}`]}</AccordionDetails>
                  </Accordion>
                )
              }
              return null
            })}
          </div>
        )}
      </div>
      <div className="border rounded-lg flex items-center justify-around p-7 gap-5">
        <div className="">
          <img src={WomanSupportIMG} alt="images" />
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-xl">We’re here to help you</p>
          <p className="text-[14px] opacity-60">
            Ask a question or file a support ticket or report an issues. Our support team will get back to your by
            email.
          </p>
        </div>
        <div className="">
          <Link to={"/support"}>
          <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-1 px-2 rounded-md" type="button">
            Get Support Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FAQ
