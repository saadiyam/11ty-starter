import { Section } from "@kickstartds/ds-agency/section";
import { Stats } from "@kickstartds/ds-agency/stats";
import { Cta } from "@kickstartds/ds-agency/cta";
import { Headline } from "@kickstartds/ds-agency/headline";
import { Text } from "@kickstartds/ds-agency/text";
import { Gallery } from "@kickstartds/ds-agency/gallery";
import { PageWrapper } from "./_includes/PageWrapper";

export const data = {
  title: "About Systemics, your Design System Agency",
  layout: "base.njk",
  eleventyNavigation: {
    key: "About",
    order: 2,
  },
};

export default (props) => (
  <PageWrapper>
    <Section width="default">
      <Cta
        align="left"
        headline="Crafting Digital Brilliance at **Systemics**"
        sub="Elevating **Headless** Experiences through Innovative **Design Systems**"
        text={`At Systemics, we specialize in creating bespoke design systems that bring harmony and consistency to your digital presence. Our expertise extends beyond design, as we seamlessly integrate headless CMS architecture, maximizing the value of both worlds. We work closely with you, understanding your brand's essence and user needs, to craft experiences that leave a lasting impact.`}
      />
    </Section>

    <Section
      style="accent"
      width="wide"
      align="left"
      mode="list"
      spaceAfter="small"
    >
      <Headline
        align="left"
        text="We empower Businesses with the Tools they need to thrive in the Digital Landscape."
        sub="Our crystal clear mission:"
        switchOrder
        content=""
        level="h2"
        style="h1"
        spaceAfter="minimum"
      />
    </Section>

    <Section style="accent" width="narrow" align="left" spaceBefore="none">
      <Text
        text={`**We believe** that well-crafted design systems are the cornerstone of exceptional user experiences. Our team is dedicated to providing clients with tailored solutions that bridge the gap between creativity and functionality, ultimately reshaping the way users engage with brands.`}
        layoutVariant={"singleColumn"}
      />
    </Section>

    <Section width="default" align="left">
      <Text
        layoutVariant="multiColumn"
        text={`
### Benefit from the **power of kickstartDS**
**as we do too!**  
We strongly believe in using the best tools to bring our clients exceptional results. That's why we've integrated kickstartDS into our workflow. This code-first framework for design system creation is our secret sauce to saving time, without compromising on quality. kickstartDS allows us to fast-track the development process, ensuring you get a fully functional and polished design system in a fraction of the time it would traditionally take.

### **Maximizing Value** for Our Clients
We're not just building design systems; we're building value. By combining our expertise in design systems and headless CMS architecture, we deliver solutions that are not only visually appealing but also inherently functional. This approach ensures that your brand's identity remains consistent across platforms while your content distribution becomes more dynamic and efficient. We firmly believe that a harmonious blend of design systems and headless CMSs unlocks immense potential for businesses, propelling them ahead in the digital race.`}
      />
    </Section>

    <Section
      headline="About & History"
      style="accent"
      width="default"
      align="left"
    >
      <Text
        text={`Founded by passionate digital enthusiasts, Systemics emerged from the desire to reshape the digital realm. With a history spanning over a decade, we've continuously evolved to stay at the forefront of design systems, headless CMSs, and cutting-edge development practices. Our journey is one of innovation, collaboration, and a relentless pursuit of excellence.`}
      />
    </Section>

    <Section
      headline="Facts & Figures"
      style="accent"
      width="wide"
      align="left"
    >
      <Stats
        stats={[
          {
            description:
              "With over 33 years in the industry, we`ve honed our craft and forged a reputation for **headless excellence** designed in systems.",
            icon: "person",
            label: "Years of Expertise",
            value: "33+",
          },
          {
            description:
              "**We`re so great**, that we`ve collaborated with diverse clients, across industries, delivering impactful solutions that drive results",
            icon: "home",
            label: "Successful Projects",
            value: "200+",
          },
          {
            description:
              "Thanks to **NPS, our client-centric** approach ensures we meet and exceed expectations, reflected in our high satisfaction rate",
            icon: "map",
            label: "Client Satisfaction",
            value: "99%",
          },
        ]}
      />
    </Section>

    <Section headline="Super cool Agency Life here" style="accent" width="wide">
      <Gallery
        images={[
          {
            alt: "Alt text Image 1",
            caption: "Caption Image 1",
            url: "/static/img/agency.png",
          },
          {
            alt: "Alt text Image 2",
            caption: "Caption Image 2",
            url: "/static/img/team.png",
          },
          {
            alt: "Alt text Image 3",
            caption: "Caption Image 3",
            url: "/static/img/agency.png",
          },
          {
            alt: "Alt text Image 4",
            caption: "Caption Image 4",
            url: "/static/img/agency.png",
          },
          {
            alt: "Alt text Image 5",
            caption: "Caption Image 5",
            url: "/static/img/team.png",
          },
          {
            alt: "Alt text Image 6",
            caption: "Caption Image 6",
            url: "/static/img/agency.png",
          },
        ]}
        layout="largeTiles"
      />
    </Section>

    <Section inverted>
      <Cta
        align="left"
        headline="Discover the **Systemics** difference. Join us in creating a **Digital Future** that's both functional and unforgettable."
        primaryCta={{
          toggle: true,
          label: "Contact us",
          target: "https://app.lemcal.com/@daniel-ley",
          icon: "person",
        }}
        secondaryCta={{
          toggle: true,
          label: "Book a meeting",
          target: "https://app.lemcal.com/@daniel-ley",
          icon: "date",
        }}
      />
    </Section>
  </PageWrapper>
);
