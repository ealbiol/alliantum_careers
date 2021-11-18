import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

function Test() {
    return (
        <Layout>

            <div className="flex my-6">

                <div className="w-6/12">
                    <div>
                        <ul className="card-menu flex flex-col">
                            <li className="flex w-full flex-grow"><button className="p-4 flex-grow uppercase flex justify-between cursor-pointer">Pioneering spirit <span className="block">icon</span></button></li>
                        </ul>
                    </div>
                </div>

                <div className="w-6/12">
                    <div className="rounded-lg bg-white overflow-hidden" >
                        <img src="" alt="Image" />
                        <div className="p-4">
                            <h3 className="text-uppercase">Title</h3>
                            <div>Descrip</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="hero-header">
                <div className="hero-header__left">
                    <div className="hero-left-content">

                        <div className="hero-left-content__wrapper z-10 bg-gradient-to-r from-white via-white to-transparent flex flex-col items-start justify-center h-10">
                            <span className="pretitle text-xs font-bold">We are looking for talent</span>
                            <h1 className="font-title">Want to work with us?</h1>
                            <button className="btn btn-primary">See open processes</button>
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
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Test