import Headings from "../headings";
const Mthers = () => {
  return (
    <div className="accordion-item">
      <Headings
        data={"M.E./M.Tech./M.Arch./\nM.Plan./MBA / MCA"}
        id={"panelsStayOpen-headingOne2"}
        target={"#panelsStayOpen-collapseTwo2"}
        aria={"panelsStayOpen-collapseTwo2"}
      />
      <div
        id="panelsStayOpen-collapseTwo2"
        className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingTwo2"
      >
        <div className="table-responsive m-5">
          <table className="table table-bordered mt-3 mb-3 block">
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Title of the Thesis</th>
                <th>Name of the Scholar</th>
                <th>Name of the Supervisor</th>
                <th>Month and Year if the Viva-voce conducted</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Mthers;
