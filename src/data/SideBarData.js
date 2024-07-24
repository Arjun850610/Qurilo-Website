import socialMarketing from "../assets/blog-reading/images/marketing.jpg"
import digital from "../assets/blog-reading/images/digital.jpg"
import email from "../assets/blog-reading/images/email.jpg"
import fullstack from "../assets/blog-page/images/full stack.jpg";
import mobile from "../assets/blog-page/images/Mobile.jpg";
import website from "../assets/blog-page/images/website.jpg";

export const sideBarData = {
    aboutUsSection: {
        aboutHeading: "About Us",
        aboutPera: "We are a leading IT services company dedicated to providing top-notch solutions to our clients. We specialize in leveraging cutting-edge technology to drive innovation and efficiency."
    },
    services: {
        servicesHeading: "Services Offered",
        servicesList: [
            "It Services",
            "Development Services",
            "E-Commerce Services",
            "Industries",
            "Business Solutions"
        ]
    },

    recentBlogs: [
        {
            image: fullstack,
            title: "Achieve Comprehensive Solutions with Qurilo: Full Stack Development Services"
        },
        {
            image: mobile,
            title: "Reach Your Audience on the Go with Qurilo: Mobile App Development Services"
        },
        {
            image: website,
            title: "Create Engaging Online Platforms with Qurilo: Website & Portal Development Services"
        },
    ],

    marketing: [
        {
            image: socialMarketing,
            name: "Social Media Marketing"
        },
        {
            image: email,
            name: "Email Marketing"
        },
        {
            image: digital,
            name: "Digital Marketing"
        },
    ]
}