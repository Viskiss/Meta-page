import { Tabs } from "@mantine/core";
import styles from "./Story.module.scss";

function Story() {
  return (
    <div className={styles.block}>
      <div className={styles.header}>
        <h1>MRL.<span>THE STORY.</span></h1>
      </div>

      <Tabs color="dark" variant="outline"
        className={styles.info}
        orientation="vertical"
        defaultValue="gallery"
      >
        <Tabs.List>
          <Tabs.Tab data-active="true" value="Our founders">Our founders</Tabs.Tab>
          <Tabs.Tab value="Partners">Partners</Tabs.Tab>
          <Tabs.Tab value="The future">The future</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel className={styles.panel} value="Our founders" pl="xs">
          <span className={styles.vl}></span>
          <h3>
            META WAVE NFT is your pass to Meta Record Label ecosystem. It is
            your access to our industry experts, established artists, and
            partners.
          </h3>
          <p>
            Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet
            dictum sit amet justo. Tortor aliquam nulla facilisi cras.
          </p>
          <p>
            Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur
            adipiscing elit ut aliquam purus. Porta nibh venenatis cras sed
            felis. Aenean vel elit scelerisque mauris pellentesque pulvinar. Et
            malesuada fames ac turpis egestas sed tempus. Enim sit amet
            venenatis urna cursus eget.
          </p>
        </Tabs.Panel>

        <Tabs.Panel className={styles.panel} value="Partners" pl="xs">
          ...
        </Tabs.Panel>

        <Tabs.Panel className={styles.panel} value="The future" pl="xs">
          ...
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default Story;
