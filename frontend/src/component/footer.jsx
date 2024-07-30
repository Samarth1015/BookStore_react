import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import "./footer.css";
export default function Footeri() {
  return (
    <Footer container style={{ height: "7rem" }}>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterLinkGroup>
            <FooterLink
              className="FooterLink"
              href="#"
              style={{ marginLeft: "2rem" }}
            >
              About
            </FooterLink>
            <FooterLink
              className="FooterLink"
              href="#"
              style={{ marginLeft: "2rem" }}
            >
              Privacy Policy
            </FooterLink>
            <FooterLink
              className="FooterLink"
              href="#"
              style={{ marginLeft: "2rem" }}
            >
              Licensing
            </FooterLink>
            <FooterLink
              className="FooterLink"
              href="#"
              style={{ marginLeft: "2rem" }}
            >
              Contact
            </FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="Flowbite™" year={2024} />
      </div>
    </Footer>
  );
}
