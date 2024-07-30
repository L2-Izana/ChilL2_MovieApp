import ActionButton from "./ActionButton";

import BannerBackgroundImg from "../media/banner_background.jpg";
import BannerThumbnailImg from "../media/banner_thumbnail.jpg";

function Banner() {
  const bannerTitle = "My Love (你的婚礼)";
  const bannerGenre = "Romance/Comedy";
  const bannerDescription =
    "My Love is a heartfelt romantic drama that explores the deep and enduring bonds of love. The film follows the journey of its protagonists as they navigate the complexities of their relationship, facing both joys and challenges. With poignant storytelling and compelling performances, My Love delves into the themes of devotion, sacrifice, and the transformative power of love. It's a touching portrayal of how love can shape our lives and lead us to unexpected places.";

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${BannerBackgroundImg})`,
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
      }}
    >
      <div
        className="banner-content"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          maxWidth: "80%",
          margin: "auto",
        }}
      >
        <div className="banner-info">
          <h1
            className="banner-info-title"
            style={{ fontSize: "2rem", marginBottom: "1rem" }}
          >
            {bannerTitle}
          </h1>
          <p
            className="banner-info-genre font-serif"
            style={{ fontSize: "1.2rem", marginBottom: "1rem" }}
          >
            {bannerGenre}
          </p>
          <p
            className="banner-info-description"
            style={{ fontSize: "1rem", lineHeight: "1.5" }}
          >
            {bannerDescription}
          </p>
          <div className="banner-button" style={{ marginTop: "1rem" }}>
            <ActionButton label={"Watch Now"}></ActionButton>
            <ActionButton label={"View Info"}></ActionButton>
          </div>
        </div>
        <div className="banner-poster mt-5">
          <img
            src={BannerThumbnailImg}
            alt={bannerTitle}
            style={{
              height: "50vh",
              objectFit: "cover", // Maintain aspect ratio
              borderRadius: "10px", // Rounded corners
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
