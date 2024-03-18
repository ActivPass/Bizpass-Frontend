import React, { useState } from "react"
import RowNavigation from "./RowNavigation"
import WomanSupportIMG from "../../assets/images/woman-support.png"
import Card from "./Card"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { Link } from "react-router-dom"
import {FAQdata} from "../../utils/data/FAQdata"

const FAQ = () => {
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
                  <Accordion
                    style={{ margin: 0,}}
                    key={index}
                    expanded={expanded === selectedFAQ["Faq"][`Q${questionNumber}`]}
                    onChange={() => setExpanded(selectedFAQ["Faq"][`Q${questionNumber}`])}
                  >
                    <AccordionSummary
                      style={{height : "4rem" }}
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
            <button
              className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-1 px-2 rounded-md"
              type="button"
            >
              Get Support Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FAQ
