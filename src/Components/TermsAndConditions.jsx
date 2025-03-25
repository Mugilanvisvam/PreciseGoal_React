import React,{useEffect} from "react";
import { Container, Card } from "react-bootstrap";

const TermsAndConditions = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <Container className="my-5">
      <Card className="p-4 shadow-lg">
        <h2 className="text-center mb-4">Terms & Conditions</h2>
        <p>
          Welcome to our website. If you continue to browse and use this
          website, you are agreeing to comply with and be bound by the
          following terms and conditions of use, which together with our
          <strong> Privacy Policy</strong>, govern Precise Goal’s relationship
          with you.
        </p>
        <p>
          The term <strong>"Precise Goal"</strong> (or “us”/“we”/“our”) refers
          to the owner of the website. The term “you” refers to the user or
          viewer of our website.
        </p>
        <h5>Usage Terms</h5>
        <ul>
          <li>
            You understand and accept that Precise Goal maintains the website
            to provide visitors with information about us, our services, and
            products.
          </li>
          <li>
            You accept that all content on the website is protected by
            copyright laws and intellectual property laws.
          </li>
          <li>
            All information submitted by you on the site shall be deemed the
            property of Precise Goal, and we are free to use any ideas or
            techniques you provide.
          </li>
          <li>
            You agree not to copy, reproduce, sell, redistribute, or exploit
            any content without permission, except for personal use.
          </li>
        </ul>
        <h5>Prohibited Use</h5>
        <ul>
          <li>
            You shall not use our website for unlawful purposes or in any way
            that could damage or impair it.
          </li>
          <li>
            You may not attempt to modify, translate, disassemble, decompile,
            or reverse-engineer any software on the website.
          </li>
        </ul>
        <h5>Third-Party Links</h5>
        <p>
          We are not responsible for the content or availability of third-party
          sites linked from our website. Use of external links is at your own
          risk.
        </p>
        <h5>Liability & Force Majeure</h5>
        <p>
          Precise Goal shall not be liable for any failure to perform its
          obligations due to unforeseen circumstances or events beyond our
          control (Force Majeure events).
        </p>
        <h5>Changes to Terms</h5>
        <p>
          We reserve the right to amend these terms at any time with prior
          notice of 30 days. Continued use of our services constitutes
          acceptance of the updated terms.
        </p>
        <h5>Governing Law & Jurisdiction</h5>
        <p>
          The courts in Chennai shall have exclusive jurisdiction over any
          disputes. All matters will be governed by the laws of India.
        </p>
      </Card>
    </Container>
  );
};

export default TermsAndConditions;