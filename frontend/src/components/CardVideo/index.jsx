import PropTypes from "prop-types";
import SCardVideo from "@components/CardVideo/style";

export default function CardVideo({ name, video, img, pseudo, title }) {
  return (
    <SCardVideo>
      <div className="video">
        <iframe src={video} title={name} />
        <div>
          <img src={img} alt={pseudo} />
          <h3>{title}</h3>
          <p>{pseudo}</p>
        </div>
      </div>
    </SCardVideo>
  );
}

CardVideo.propTypes = {
  name: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
