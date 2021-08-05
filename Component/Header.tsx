/* eslint-disable @next/next/no-img-element */
export default function Header() {
  return (
    <header className="d-flex justify-between items-center">
      <div className="tab-title text-capitalized">keywords</div>
      <div className="d-flex gap-4">
        <form action="#" className="customized-form-1">
          <input type="text" className="form-control" />
          <button className="btn" type="submit">
            Submit <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </form>
        <div className="profile">
          <img src="/profile.svg" alt="profile" />
        </div>
      </div>
    </header>
  );
}
