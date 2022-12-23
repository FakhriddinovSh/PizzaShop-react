import './AdminModal.css';
import ArrowPng from '../../Assets/Images/Icons/to-bottom-arrow.svg';

export const AdminModal = () => {
	return (
		<>
			<div>
				<button
					type="button"
					className="btn btn-primary"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal"
				>
					Launch demo modal
				</button>
				<div
					className="modal fade"
					id="exampleModal"
					tabIndex={-1}
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
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
												aria-label="Close"
											></button>
										</div>
										<form className="d-flex flex-column">
											<label>
												<input
													className="admin-input"
													type="text"
													placeholder="Product name"
													name="new_product"
												/>
											</label>
											<label>
												<input
													className="admin-input"
													type="text"
													placeholder="Product bowls"
													name="new_bowls"
												/>
											</label>
											<label>
												<input
													className="admin-input"
													type="text"
													placeholder="Product price"
													name="new_price"
												/>
											</label>
											<select className="admin-input">
												<option
													value="selected"
													defaultValue={'selected'}
													hidden
												>
													Product category
												</option>
												<option value="hot">
													Hot Dishes
												</option>
												<option value="cold">
													Cold Dishes
												</option>
												<option value="soup">
													Soup
												</option>
												<option value="grill">
													Grill
												</option>
												<option value="appetizer">
													Appetizer
												</option>
												<option value="dessert">
													Dessert
												</option>
											</select>
											<label
												className="admin-file"
												htmlFor="admin-file"
											>
												<div
													className="text-center position-relative admin-file-wrapper"
													style={{
														marginTop: '100px',
													}}
												>
													<p className="m-0 admin-file-desc-1">
														Click or drag file to
														this area to upload
													</p>
													<p className="m-0 admin-file-desc-2">
														Support for a single or
														bulk upload.
													</p>
												</div>
											</label>
											<input
												type="file"
												id="admin-file"
												className="d-none"
											/>

											<div
												className="d-flex justify-content-between"
												style={{ marginTop: '70px' }}
											>
												<button className="admin-cancel">
													Cancel
												</button>
												<button className="admin-add">
													Add
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
