import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Button, ButtonGroup, Row, Col, Nav, Table } from "react-bootstrap";
import "../../styles/perfil.scss";
//import { Dropdown } from "../component/dropdown";

export const Perfil = () => {
	var dropy = {
		$dropys: null,
		openClass: "open",
		selectClass: "selected",
		init: function() {
			var self = this;

			self.$dropys = $(".dropy");
			self.eventHandler();
		},
		eventHandler: function() {
			var self = this;

			// Opening a dropy
			self.$dropys.find(".dropy__title").click(function() {
				self.$dropys.removeClass(self.openClass);
				$(this)
					.parents(".dropy")
					.addClass(self.openClass);
			});

			// Click on a dropy list
			self.$dropys.find(".dropy__content ul li a").click(function() {
				var $that = $(this);
				var $dropy = $that.parents(".dropy");
				var $input = $dropy.find("input");
				var $title = $(this)
					.parents(".dropy")
					.find(".dropy__title span");

				// Remove selected className
				$dropy.find(".dropy__content a").each(function() {
					$(this).removeClass(self.selectClass);
				});

				// Update selected value
				$title.html($that.html());
				$input.val($that.attr("data-value")).trigger("change");

				// If back to default, remove selected className else addclass on right element
				if ($that.hasClass("dropy__header")) {
					$title.removeClass(self.selectClass);
					$title.html($title.attr("data-title"));
				} else {
					$title.addClass(self.selectClass);
					$that.addClass(self.selectClass);
				}

				// Close dropdown
				$dropy.removeClass(self.openClass);
			});

			// Close all dropdown onclick on another element
			$(document).bind("click", function(e) {
				if (
					!$(e.target)
						.parents()
						.hasClass("dropy")
				) {
					self.$dropys.removeClass(self.openClass);
				}
			});
		}
	};

	$(function() {
		dropy.init();
	});

	return (
		<>
			<div style={{ fontSize: "65.2%" }}>
				<Row>
					<main className="day d-flex justify-content-center">
						<article className="mr-5">
							<dl className="dropy">
								<h4>Ejercicio</h4>
								<dt className="dropy__title">
									<span>First dropy</span>
								</dt>
								<dd className="dropy__content">
									<ul>
										<li>
											<a className="dropy__header">First dropy</a>
										</li>
										<li>
											<a>Option n°1</a>
										</li>
										<li>
											<a>Option n°2</a>
										</li>
										<li>
											<a>Option n°3</a>
										</li>
									</ul>
								</dd>
								<input type="hidden" name="first" />
							</dl>
						</article>
						<article className="ml-5">
							<dl className="dropy">
								<h4>Distancia</h4>
								<dt className="dropy__title">
									<span>Long dropy</span>
								</dt>
								<dd className="dropy__content">
									<ul>
										<li>
											<a className="dropy__header">Long dropy</a>
										</li>
										<li>
											<a>Option n°1</a>
										</li>
										<li>
											<a>Option n°2</a>
										</li>
										<li>
											<a>Option with a really long name to test overflow</a>
										</li>
										<li>
											<a>Option n°4</a>
										</li>
										<li>
											<a>Option n°5</a>
										</li>
									</ul>
								</dd>
								<input type="hidden" name="first" />
							</dl>
						</article>
					</main>
				</Row>
				<Row>
					<main className="day d-flex justify-content-center">
						<article className="mr-5">
							<dl className="dropy">
								<h4>Tiempo</h4>
								<dt className="dropy__title">
									<span>First dropy</span>
								</dt>
								<dd className="dropy__content">
									<ul>
										<li>
											<a className="dropy__header">First dropy</a>
										</li>
										<li>
											<a>Option n°1</a>
										</li>
										<li>
											<a>Option n°2</a>
										</li>
										<li>
											<a>Option n°3</a>
										</li>
									</ul>
								</dd>
								<input type="hidden" name="first" />
							</dl>
						</article>
						<article className="ml-5">
							<dl className="dropy">
								<h4>Fecha</h4>
								<dt className="dropy__title">
									<span>Long dropy</span>
								</dt>
								<dd className="dropy__content">
									<ul>
										<li>
											<a className="dropy__header">Long dropy</a>
										</li>
										<li>
											<a>Option n°1</a>
										</li>
										<li>
											<a>Option n°2</a>
										</li>
										<li>
											<a>Option with a really long name to test overflow</a>
										</li>
										<li>
											<a>Option n°4</a>
										</li>
										<li>
											<a>Option n°5</a>
										</li>
									</ul>
								</dd>
								<input type="hidden" name="first" />
							</dl>
						</article>
					</main>
				</Row>
				<Row>
					<Col className="d-flex justify-content-center mt-5">
						<Button className="btn " variant="primary" size="lg" type="submit">
							Agregar
						</Button>
					</Col>
				</Row>

				{/* <div className="d-flex justify-content-center mt-3" id="line">
				<hr />
			</div> */}

				<Table responsive>
					<thead>
						<tr>
							<th>#</th>
							{Array.from({ length: 4 }).map((_, index) => (
								<th key={index}>Table heading</th>
							))}
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							{Array.from({ length: 4 }).map((_, index) => (
								<td key={index}>Table cell {index}</td>
							))}
						</tr>
						<tr>
							<td>2</td>
							{Array.from({ length: 4 }).map((_, index) => (
								<td key={index}>Table cell {index}</td>
							))}
						</tr>
						<tr>
							<td>3</td>
							{Array.from({ length: 4 }).map((_, index) => (
								<td key={index}>Table cell {index}</td>
							))}
						</tr>
					</tbody>
				</Table>
			</div>
		</>
	);
};

{
	/* <main className="night">
                        <div className="inner">
                            <article>
                                <dl className="dropy dark">
                                    <dt className="dropy__title"><span>First dropy</span></dt>
                                    <dd className="dropy__content">
                                        <ul>
                                            <li><a className="dropy__header">First dropy</a></li>
                                            <li><a>Option n°1</a></li>
                                            <li><a>Option n°2</a></li>
                                            <li><a>Option n°3</a></li>
                                        </ul>
                                    </dd>
                                    <input type="hidden" name="first" />
                                </dl>
                            </article>
                        </div>
                    </main> */
}
