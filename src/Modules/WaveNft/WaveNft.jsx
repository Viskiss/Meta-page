import styles from "./WaveNft.module.scss";
import Text from "../Label/Meta/Meta";

function WaveNft() {
  return (
    <div className={styles.block}>
      <div className={styles.wave}>
        <Text value="WAVE&nbsp;NFT" />
        <Text value="COLLECTION&nbsp;OF" />

        <Text value="777" />
        <img src="/image/waveNft/wave.png" alt="" />
      </div>
      <div className={styles.info}>
        <span className={styles.vl}></span>
        <h3>
          META WAVE NFT is your pass to Meta Record Label ecosystem. It is your
          access to our industry experts, established artists, and partners.
        </h3>
        <p>
          Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum
          sit amet justo. Tortor aliquam nulla facilisi cras.
        </p>
        <p>
          Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur
          adipiscing elit ut aliquam purus. Porta nibh venenatis cras sed felis.
          Aenean vel elit scelerisque mauris pellentesque pulvinar. Et malesuada
          fames ac turpis egestas sed tempus. Enim sit amet venenatis urna
          cursus eget.
        </p>
        <p>
          Maecenas ultricies mi eget mauris pharetra et ultrices. A condimentum
          vitae sapien pellentesque habitant morbi.
        </p>
        <button>Get one on OpenSea</button>
      </div>
    </div>
  );
}

export default WaveNft;
