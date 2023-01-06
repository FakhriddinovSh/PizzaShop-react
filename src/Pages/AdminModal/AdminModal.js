import "./AdminModal.css";

export const AdminModal = ({children}) => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div>
                <div className="admin-wrapper">
                  <div className="d-flex text-white justify-content-between align-items-center mb-4">
                    <h3 className="admin-title">
                      Add new product item to list
                    </h3>
                    <button
                      className="admin-button"
                      data-bs-dismiss="modal"
                      aria-label="Close"></button>
                  </div>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
