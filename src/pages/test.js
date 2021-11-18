import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links";


function Test() {
    return (
        <Layout>

            <div className="hero-header">
                <div className="hero-header__left">
                    <div className="hero-left-content">

                        <div className="hero-left-content__wrapper z-10 bg-gradient-to-r from-white via-white to-transparent flex flex-col items-start justify-center h-10">
                            <span className="pretitle text-xs font-bold">We are looking for talent</span>
                            <h1 className="font-title">Want to work with us?</h1>
                            <AnchorLink className="btn btn-primary" to={"/#jobs-table"} >See open processes</AnchorLink>

                        </div>

                    </div>
                </div>
                <div className="hero-header__back">
                    <div className="hero-back-content">
                        <div className="hero-faces-row mb-2">

                            <div className="hero-faces-row__item">
                                <StaticImage
                                    className="hero-item-face"
                                    src="../images/employees-photos/CarlosMayo.jpg"
                                    alt="Carlos"
                                    placeholder="blurred"
                                    layout="fixed"
                                    width="280"
                                />
                                <div className="hero-item-info">
                                    <span className="block">Antxonio Felipez</span>
                                    <span className="block">Desatascador de humanos</span>
                                </div>
                            </div>

                            <div className="hero-faces-row__item">
                                <StaticImage
                                    className="hero-item-face"
                                    src="../images/employees-photos/CarlosMayo.jpg"
                                    alt="Carlos"
                                    placeholder="blurred"
                                    layout="fixed"
                                    width="280"
                                />
                                <div className="hero-item-info">
                                    <span className="block">Antxonio Felipez</span>
                                    <span className="block">Desatascador de humanos</span>
                                </div>
                            </div>

                            <div className="hero-faces-row__item">
                                <StaticImage
                                    className="hero-item-face"
                                    src="../images/employees-photos/CarlosMayo.jpg"
                                    alt="Carlos"
                                    placeholder="blurred"
                                    layout="fixed"
                                    width="280"
                                />
                                <div className="hero-item-info">
                                    <span className="block">Antxonio Felipez</span>
                                    <span className="block">Desatascador de humanos</span>
                                </div>
                            </div>

                        </div>

                        <div className="hero-faces-row mb-2">

                            <div className="hero-faces-row__item">
                                <StaticImage
                                    className="hero-item-face"
                                    src="../images/employees-photos/CarlosMayo.jpg"
                                    alt="Carlos"
                                    placeholder="blurred"
                                    layout="fixed"
                                    width="280"
                                />
                                <div className="hero-item-info">
                                    <span className="block">Antxonio Felipez</span>
                                    <span className="block">Desatascador de humanos</span>
                                </div>
                            </div>

                            <div className="hero-faces-row__item">
                                <StaticImage
                                    className="hero-item-face"
                                    src="../images/employees-photos/CarlosMayo.jpg"
                                    alt="Carlos"
                                    placeholder="blurred"
                                    layout="fixed"
                                    width="280"
                                />
                                <div className="hero-item-info">
                                    <span className="block">Antxonio Felipez</span>
                                    <span className="block">Desatascador de humanos</span>
                                </div>
                            </div>

                            <div className="hero-faces-row__item">
                                <StaticImage
                                    className="hero-item-face"
                                    src="../images/employees-photos/CarlosMayo.jpg"
                                    alt="Carlos"
                                    placeholder="blurred"
                                    layout="fixed"
                                    width="280"
                                />
                                <div className="hero-item-info">
                                    <span className="block">Antxonio Felipez</span>
                                    <span className="block">Desatascador de humanos</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Test