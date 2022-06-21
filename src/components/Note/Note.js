import Modal from "../UI/Modal";
import Input from "../UI/Input";
import Select from "../UI/Select";
import Radio from "../UI/Radio";
import StarRating from "../UI/StarRating";
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
            <h2></h2>
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
              <div className={classes.radioRow1}>밸런스</div>
              <div className={classes.radioRow3}>
                <Radio />
              </div>
            </div>
            <div className={classes.radioContainer}>
              <span className={classes.radioRow1}>단맛</span>
              <span className={classes.radioRow3}>
                <Radio />
              </span>
            </div>
            <div className={classes.radioContainer}>
              <div className={classes.radioRow1}>신맛</div>
              <div className={classes.radioRow3}>
                <Radio />
              </div>
            </div>
            <div className={classes.radioContainer}>
              <div className={classes.radioRow1}>쓴맛</div>
              <div className={classes.radioRow3}>
                <Radio />
              </div>
            </div>
            <div className={classes.radioContainer}>
              <div className={classes.radioRow1}>바디</div>
              <div className={classes.radioRow3}>
                <Radio />
              </div>
            </div>
          </div>
          <div className={classes.flavorNote}>
            <h2>FLAVOR</h2>
            <input></input>
          </div>
          <div className={classes.circleWrapper}>
            <div className={classes.circle}></div>
            <div className={classes.circle}></div>
            <div className={classes.circle}></div>
            <div className={classes.circle}></div>
            <div className={classes.circle}></div>
          </div>
          <div>
            <h2> NOTE</h2>
            <div>
              <textarea className={classes.noteTextarea} />
            </div>
          </div>
          <div className={classes.radioContainer}>
            <div className={classes.radioRow1}>총점</div>
            <div className={classes.radioRow3}>
              <StarRating />
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
