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
                <h1 className='lg:py-10'>Privacy Policy for NearbyTVInternet</h1>
            </section>

            <section className='policyContent mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-10'>
                <p className='font-bold'>International Use and Consent</p>

                <p>If you access our site from outside the United States, NearbyTVInternet may handle your personal data according to privacy laws that may differ from those in your country. By using our website internationally, you consent to the transfer of your information to jurisdictions outside your home country. Additionally, by engaging with our website, you agree that we may use your personal information to communicate electronically or otherwise regarding your website usage, product updates, and services. To opt out of promotional communications, please follow the unsubscribe instructions included in our messages.</p>

                <p className='font-bold'>Data Collection and Usage</p>

                <p>At NearbyTVInternet, we prioritize your privacy and do not collect sensitive information without your explicit consent. When you register as a customer, we collect necessary details such as your name, address, phone number, email address, and demographic data. We also monitor website activity, including pages viewed, visit frequency, and time spent on specific pages, to enhance user experience.</p>

                <p>Your email and contact information are used solely for communication between you and us. We track IP addresses to prevent fraudulent activity. Payment information is shared only with our payment processor and your financial institution to process transactions securely.</p>

                <p className='font-bold'>Cookies and Log Data</p>

                <p>Our website may use cookies to provide a tailored experience. Cookies are small text files stored on your computer that save registration details and other preferences to simplify future visits. While cookies enhance your browsing experience, most browsers allow you to disable them. However, this may limit certain site functionalities. You may also delete cookies from your device after using our site.</p>

                <p>Additionally, we may collect anonymized data about operating systems and browser types to improve website performance and user experience.</p>

                <p className='font-bold'>Agreement to Terms</p>

                <p>By using NearbyTVInternet, you agree to this Privacy Policy. If you disagree with any part of it, please refrain from using the site. This policy may be updated periodically, and any changes will take effect upon posting. Continued use of the site after changes signifies acceptance of the updated terms.</p>

                <p className='font-bold'>Policy Updates</p>

                <p>We reserve the right to modify this Privacy Policy to reflect changes in our practices. Updates will be posted on this page or communicated via email. We encourage you to review the policy periodically to stay informed about updates.</p>

                <p className='font-bold'>Security Measures</p>

                <p>We implement recognized security protocols to protect your personal information from unauthorized access, misuse, alteration, or loss. Access to your data is restricted to authorized personnel who adhere to strict confidentiality standards.</p>

                <p className='font-bold'>Children’s Privacy</p>

                <p>NearbyTVInternet is not intended for individuals under the age of 13, and we do not knowingly collect personal information from children. We are committed to safeguarding children’s privacy and complying with applicable regulations.</p>

                <p className='font-bold'>Limitations and Disclosures</p>

                <p>While we strive to protect your privacy, we cannot guarantee absolute security due to potential legal or technological limitations. When required, we may disclose your information to private entities, law enforcement, or government agencies to address inquiries or resolve issues.</p>

                <p className='font-bold'>Dispute Resolution</p>

                <p>If you have concerns regarding our services or privacy practices, please contact us via email with detailed information about your complaint. We will acknowledge receipt within five business days and assign a representative to address your concerns. Updates to this privacy policy take effect immediately upon posting. Continued use of the website constitutes acceptance of the revised terms.</p>

                <p className='font-bold'>Contact Information</p>

                <p>For questions or concerns about this Privacy Policy, please contact us at <Link href={"mailto:info@nearbytvinternet.com"}>info@nearbytvinternet.com</Link> or via our contact form. By using our services, you agree to the terms and conditions outlined in this Privacy Policy.</p>

            </section>

            <Footer />
        </>
    )
}

export default page