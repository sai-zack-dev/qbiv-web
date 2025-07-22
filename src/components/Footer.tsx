import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import DialogCard from "@/components/DialogCard";

function Footer() {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Flow", href: "#flow" },
    { name: "Audiences", href: "#audiences" },
    { name: "Footer", href: "#footer" },
  ];

  const supportLinks = [
    { name: "Contact", href: "#contact" },
    { name: "Help Center", href: "#help" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "FAQ", href: "#faq" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: FaFacebook, href: "https://www.facebook.com/share/1V2dr44muY/?mibextid=wwXIfr" },
    { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/sai_zlinh/profilecard/?igsh=MXY1eDIxbGN5N2Z4Nw==" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/sai-zay-linn-htet/" },
    { name: "GitHub", icon: FaGithub, href: "https://github.com/sai-zack-dev" },
  ];
  const [openModal, setOpenModal] = React.useState<string | null>(null);
  const handleClose = () => setOpenModal(null);

  return (
    <div className="flex flex-col sm:flex-row justify-between px-5 gap-5 pt-25">
      <div className="flex flex-col sm:flex-row gap-5 flex-grow justify-around">
        {/* Quick link */}
        <div className="flex flex-col sm:items-start items-center border-b pb-5">
          <h1 className="mb-5 text-lg">QUICK LINKS</h1>
          <ul className="space-y-2 flex sm:flex-col gap-x-5 sm:gap-0 flex-wrap justify-center">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-500 dark:text-gray-300 hover:text-blue-500 transition-all duration-300 hover:translate-x-2 inline-block relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Support link */}
        <div className="flex flex-col sm:items-start items-center border-b pb-5">
          <h1 className="mb-5 text-lg">SUPPORT LINKS</h1>
          <ul className="space-y-2 flex sm:flex-col gap-x-5 sm:gap-0 flex-wrap justify-center">
            {supportLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => setOpenModal(link.name)}
                  className="text-gray-500 dark:text-gray-300 hover:text-blue-500 transition-all duration-300 hover:translate-x-2 inline-block relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
            ))}

          </ul>
        </div>

        {/* socialLinks */}
        <div className="flex flex-col sm:items-start items-center">
          <h1 className="mb-5 text-lg">SOCIAL LINKS</h1>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="shadow-[inset_0_0_8px_0_#3B82F6] text-gray-700 dark:text-white rounded-full p-3 hover:text-blue-500 dark:hover:text-blue-500"
                  aria-label={social.name}
                  target="_blank"
                >
                  <IconComponent className="w-7 h-7" />
                </a>
              );
            })}
          </div>
          <div className="pt-10 mt-10 border-t ">
            <span>Email: </span>
            <a
              href="mailto:saizlinh@gmail.com"
              className="hover:text-blue-500 hover:underline"
            >
              saizlinh@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 justify-center flex min-w-[200px]">
        <img
          src="/glowing-logo-light.png"
          alt="logo"
          height={200}
          className="dark:hidden"
        />
        <img
          src="/glowing-logo-dark.png"
          alt="logo"
          height={200}
          className="hidden dark:block"
        />
      </div>
      <div className="absolute bottom-0 left-0 p-5 text-sm backdrop-blur-sm">
        © 2025 QBIV - A Final Year Project by SaiZ
      </div>

      {/* Modals */}
      <DialogCard
        open={openModal === "Contact"}
        onOpenChange={handleClose}
        title="Contact"
        content={
          <p>
            You can contact me and share your feedback, thoughts, or improvement suggestions via email. 
            Whether it’s about design, performance, feature requests, or simply a word of encouragement, 
            I’d love to hear from you. As a solo developer working on QBIV as my final year project, 
            your feedback means a lot and helps me shape the tool into something genuinely useful. 
            Don’t hesitate to reach out at{" "}
            <a href="mailto:saizlinh@gmail.com" className="text-blue-500 underline">
              saizlinh@gmail.com
            </a>.
          </p>
        }
        
      />

      <DialogCard
        open={openModal === "Help Center"}
        onOpenChange={handleClose}
        title="Help Center"
        content={
          <p>
            For documentation, bug reports, or contributing to the project, please visit the GitHub 
            repository at{" "}
            <a
              href="https://github.com/sai-zack-dev/query-based-intelligence-visualization"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              github.com/sai-zack-dev/qbiv
            </a>. If you encounter errors or unexpected behavior, kindly submit an issue describing the 
            problem so I can investigate and resolve it. Your contributions—whether code, ideas, or testing—are 
            warmly welcomed. QBIV is open to collaboration and built with the community in mind. Let’s build 
            something great together!
          </p>
        }
        
      />

      <DialogCard
        open={openModal === "Privacy Policy"}
        onOpenChange={handleClose}
        title="Privacy Policy"
        content={
          <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
            <p><strong>1. Introduction</strong><br />
            QBIV is committed to safeguarding the privacy of its users. This policy outlines how user data is processed and protected. The application follows a local-first, privacy-respecting approach.</p>
        
            <p><strong>2. Local-Only Data Processing</strong><br />
            By default, all data—such as database connection info, queries, and charts—is stored locally on your device. No raw data is transmitted externally unless you opt-in to use specific features.</p>
        
            <p><strong>3. Database Credentials</strong><br />
            Database login details are stored temporarily during the session and are never uploaded, saved externally, or shared. You remain in full control of your credentials.</p>
        
            <p><strong>4. Cloud-Based Features (Opt-In)</strong><br />
            <u>AI Query Builder:</u> Sends your plain text queries to a third-party API only when enabled.<br />
            <u>Chart Sync:</u> Only minimal chart metadata is synced—no sensitive data or full database records are ever sent.</p>
        
            <p><strong>5. Transparency and Consent</strong><br />
            You will always be informed before any data is sent online. All cloud-based features are optional and require explicit consent.</p>
        
            <p><strong>6. Development and Testing</strong><br />
            The project uses only demo data during development to avoid handling real or sensitive information.</p>
        
            <p><strong>7. GDPR and Legal Compliance</strong><br />
            QBIV complies with GDPR principles. No personal data is collected without your consent, and all third-party services follow open-source or fair-use licenses.</p>
          </div>
        }        
      />

      <DialogCard
        open={openModal === "Terms of Service"}
        onOpenChange={handleClose}
        title="Terms of Service"
        content={
          <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
            <p><strong>1. Acceptance of Terms</strong><br />
            By using QBIV, you agree to these terms. QBIV is a student-led, open-source project intended for educational and non-commercial use.</p>
        
            <p><strong>2. User Responsibilities</strong><br />
            You are responsible for securing your database connections and verifying the accuracy of AI-generated results or data visualizations.</p>
        
            <p><strong>3. Usage Restrictions</strong><br />
            Do not use QBIV for unauthorized access, illegal activity, or data misuse. Misuse may result in revoked access or further action.</p>
        
            <p><strong>4. AI Disclaimer</strong><br />
            AI-generated SQL queries and insights are provided for assistance only. Users should validate outputs before making business or data decisions.</p>
        
            <p><strong>5. Data Consent</strong><br />
            No data is sent online unless you explicitly enable features like sync or AI. Your consent is always required.</p>
        
            <p><strong>6. Security Commitments</strong><br />
            QBIV follows secure-by-default principles including input validation, encryption plans (e.g., SSL), and local processing of user data.</p>
        
            <p><strong>7. Intellectual Property</strong><br />
            QBIV and its assets are open-source under applicable licenses. Contributions must comply with ethical and legal guidelines.</p>
        
            <p><strong>8. Limitation of Liability</strong><br />
            QBIV is provided “as is” with no warranties. The developer is not responsible for any loss or damage from the use of this software.</p>
          </div>
        }
        
        
      />

      <DialogCard
        open={openModal === "FAQ"}
        onOpenChange={handleClose}
        title="Frequently Asked Questions"
        content={
          <div className="space-y-3">
            <p><strong>Q:</strong> What is QBIV?<br /><strong>A:</strong> QBIV is a business intelligence tool that helps you visualize SQL queries easily.</p>
            <p><strong>Q:</strong> Can I use QBIV offline?<br /><strong>A:</strong> Yes, it works offline using local SQLite and files.</p>
            <p><strong>Q:</strong> Does QBIV support AI-generated queries?<br /><strong>A:</strong> Absolutely! You can use natural language to build queries with AI.</p>
            <p><strong>Q:</strong> Can I connect to my own MySQL database?<br /><strong>A:</strong> Yes, just enter your connection credentials in the Data Connection screen.</p>
            <p><strong>Q:</strong> Is this project open source?<br /><strong>A:</strong> Yes, it’s fully open-source and contributions are welcome on GitHub!</p>
            <p className="pt-2">
              If you have more questions, feel free to email me at{" "}
              <a href="mailto:saizlinh@gmail.com" className="text-blue-500 underline">
                saizlinh@gmail.com
              </a>.
            </p>
          </div>
        }
        
      />
    </div>
  );
}

export default Footer;
