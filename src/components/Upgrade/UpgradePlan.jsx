import React from 'react';
import Card from './Card.jsx';

const UpgradePlan = () => {
    let Prices = [
        {
          plan: "FREE",
          price: "$0/month",
          features: [
            {
              name: "Single User",
              isEnabled: true
            },
            {
              name: "50GB Storage",
              isEnabled: true
            },
            {
              name: "Unlimited Public Projects",
              isEnabled: true
            },
            {
              name: "Community Access",
              isEnabled: true
            },
            {
              name: "Unlimited Private Projects",
              isEnabled: false
            },
            {
              name: "Dedicated Phone Support",
              isEnabled: false
            },
            {
              name: "Free Subdomain",
              isEnabled: false
            },
            {
              name: "Monthly Status Reports",
              isEnabled: false
            }
          ]
        },
        {
          plan: "PLUS",
          price: "$9/month",
          features: [
            {
              name: "5 Users",
              isEnabled: true
            },
            {
              name: "50GB Storage",
              isEnabled: true
            },
            {
              name: "Unlimited Public Projects",
              isEnabled: true
            },
            {
              name: "Community Access",
              isEnabled: true
            },
            {
              name: "Unlimited Private Projects",
              isEnabled: true
            },
            {
              name: "Dedicated Phone Support",
              isEnabled: true
            },
            {
              name: "Free Subdomain",
              isEnabled: true
            },
            {
              name: "Monthly Status Reports",
              isEnabled: false
            }
          ]
        },
        {
          plan: "PRO",
          price: "$49/month",
          features: [
            {
              name: "Unlimited Users",
              isEnabled: true
            },
            {
              name: "50GB Storage",
              isEnabled: true
            },
            {
              name: "Unlimited Public Projects",
              isEnabled: true
            },
            {
              name: "Community Access",
              isEnabled: true
            },
            {
              name: "Unlimited Private Projects",
              isEnabled: true
            },
            {
              name: "Dedicated Phone Support",
              isEnabled: true
            },
            {
              name: "Free Subdomain",
              isEnabled: true
            },
            {
              name: "Monthly Status Reports",
              isEnabled: true
            }
          ]
        }
      ];
  return (
    <>
    <section className="py-5">
        <p className="text-3xl text-center w-[70%] ml-[17%] mb-10">Flexible Plans Tailored to Fit Your Community's Unique Needs!</p>
      <div className="mx-auto">
        <div className="grid grid-cols-3 gap-5">
          {Prices.map((obj, index) => (
            <Card key={index} data={obj} />
          ))}
        </div>
      </div>
    </section>
  </>
  )
}

export default UpgradePlan;