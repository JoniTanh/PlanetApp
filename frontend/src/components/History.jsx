import MainWrapper from "./UI/MainWrapper";

export default function History() {
  return (
    <MainWrapper>
      <div>
        <div>
          History of mission launches including SpaceX launches starting from
          the year 2006.
        </div>
        <div style={{ borderBottom: "1px solid black" }}>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>No.</th>
                <th>Date</th>
                <th>Mission</th>
                <th>Rocket</th>
                <th>Customers</th>
              </tr>
            </thead>
            <tbody>
              {/* TODO: first th for example red square, data.map(item => <tr>...</tr>) */}
            </tbody>
          </table>
        </div>
      </div>
    </MainWrapper>
  );
}
