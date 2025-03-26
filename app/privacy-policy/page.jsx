"use client"
import React from 'react'
import Link from 'next/link'
import Navbar from '../_components/Navbar'
import Footer from '../_components/Footer'

const page = () => {
    return (
        <>
            <Navbar />

            <section className='policyHeader mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
                <h1 className='lg:py-10'>PRIVACY POLICY</h1>
            </section>

            <section className='policyContent mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-10'>
                <p>Scope of this policy:</p>

                <p>This Privacy Policy applies to nearbytvinternet.com operation of this Web site under express agreement with Charter Spectrum ™ and nearbytvinternet.com method of collection and use of personal information gathered by us for Charter Spectrum ™. However, the privacy practices of our clients and media providers are not covered by this Privacy Policy.</p>

                <p>This Privacy Policy applies to your use of nearbytvinternet.com. If you leave this site via a link or otherwise, this Privacy Policy does not apply, and nearbytvinternet.com cannot be and is not responsible for how personal information collected from you on other Web sites is used by the operators of such Web sites. Please be sure and check those Web sites’ Privacy Policies to ensure you are aware of their practices.</p>

                <p>nearbytvinternet.com may set and access our own cookies on your computer to allow you to buy and interact more conveniently and effectively with our Web sites. We also use web beacons to gather anonymous, aggregated statistical information (e.g. unique hits, page views) about our Web site traffic. This information is used to optimize your online experience by simplifying the process by which you order or interact with our Web sites.</p>

                <p>nearbytvinternet.com may share, as necessary, your personal information collected by us with third parties to help authenticate your order (i.e. make sure it’s really you) or to process your order (e.g. with shipping companies, with credit card processors, etc.). Additionally, we may use or share with our business partners this personal information for statistical and demographic analysis to help us and our business partners to ensure that you are receiving all of the products, services and discounts for which you are qualified and to provide you with better services and offerings.</p>

                <p>nearbytvinternet.com will not share, rent, lease, or sell your personal information (e.g. your name, your address, your email address, your credit card information) to any third party for their independent use or benefit without first obtaining your permission.</p>

                <p>nearbytvinternet.com may contact you by telephone, email or regular mail using the contact information you provide to nearbytvinternet.com for the purposes of communicating to you regarding your order, customer surveys and special offers. By providing such contact information to nearbytvinternet.com, you are authorizing nearbytvinternet.com to contact you in this manner. You may, however, request at any time you are contacted by telephone, email or regular mail that you no longer be contacted by</p>

                <p>When you order products or services from us or register with this Site, we may collect your: Name Mailing and billing address E-mail address Phone number Credit card number and expiration date Social Security Number</p>

                <p>For Questions or Concerns about This Privacy Policy: email us at: <Link href={"mailto:info@nearbytvinternet.com"}>info@nearbytvinternet.com</Link> : Privacy Policy Coordinator.</p>
            </section>

            <Footer />
        </>
    )
}

export default page