import Modal from "../UI/Modal";
import Input from "../UI/Input";
import Select from "../UI/Select";
import Radio from "../UI/Radio";
import classes from "./Note.module.css";

const DUMMY_COUNTRY = [
  "브라질",
  "베트남",
  "콜롬비아",
  "인도네시아",
  "에티오피아",
  "과테말라",
  "우간다",
];

const DUMMY_KIND = ["Natural Dry", "Washed", "Semi-Washed", "Pulped Natural"];

const DUMMY_DRIP_METHOD = ["강배전", "중배전", "약배전"];

const Note = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <form>
        <div className={classes.noteWrapper}>
          <div>
            <h2>CUPING NOTE</h2>
            <div className={classes.selContainer}>
              <div className={classes.selRow1}>
                <Select options={DUMMY_COUNTRY} />
              </div>
              <div className={classes.selRow3}>
                <Input placeholder="  농장, 지역명 ..." />
              </div>
            </div>
            <div className={classes.selContainer}>
              <div className={classes.selRow1}>
                <Select options={DUMMY_KIND} />
              </div>
              <div className={classes.selRow1}>
                <Select options={DUMMY_DRIP_METHOD} />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.noteWrapper}>
          <div>
            <h2>TASTE MAP</h2>
            <div className={classes.radioContainer}>
              <span className={classes.radioRow1}>밸런스</span>
              <span className={classes.radioRow3}>
                <Radio />
              </span>
            </div>
            <div className={classes.radioContainer}>
              <span className={classes.radioRow1}>단맛</span>
              <span className={classes.radioRow3}>
                <Radio />
              </span>
            </div>
            <div className={classes.radioContainer}>
              <span className={classes.radioRow1}>신맛</span>
              <span className={classes.radioRow3}>
                <Radio />
              </span>
            </div>
            <div className={classes.radioContainer}>
              <span className={classes.radioRow1}>쓴맛</span>
              <span className={classes.radioRow3}>
                <Radio />
              </span>
            </div>
            <div className={classes.radioContainer}>
              <span className={classes.radioRow1}>바디</span>
              <span className={classes.radioRow3}>
                <Radio />
              </span>
            </div>
          </div>
          <div className={classes.flavorNote}>
            <h2>FLAVOR NOTE</h2>
            <input></input>
          </div>
          <div className={classes.flavorCircleWrapper}>
            <span className={classes.flavorCircle} />
            <span className={classes.flavorCircle} />
          </div>
          <div>
            <h2> NOTE</h2>
            <div>
              <textarea className={classes.noteTextarea} />
            </div>
          </div>
          <div>
            <button className={classes.submitButton}>호록</button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default Note;
