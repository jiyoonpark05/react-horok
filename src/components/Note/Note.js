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
        <div>
          <Select options={DUMMY_COUNTRY} />
          <Input placeholder="농장, 지역명 ..." />
        </div>
        <div>
          <Select options={DUMMY_KIND} />
          <Select options={DUMMY_DRIP_METHOD} />
        </div>
        <div>
          <h2>TASTE MAP</h2>
          <div>
            <span>밸런스</span>
            <Radio />
          </div>
          <div>
            <span>단맛</span>
            <Radio />
          </div>
          <div>
            <span>신맛</span>
            <Radio />
          </div>
          <div>
            <span>쓴맛</span>
            <Radio />
          </div>
          <div>
            <span>바디</span>
            <Radio />
          </div>
        </div>
        <div>
          <h2>FLAVOR NOTE</h2>
        </div>
        <div>
          <h2> NOTE</h2>
          <textarea />
        </div>
      </form>
    </Modal>
  );
};

export default Note;
