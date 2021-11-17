import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"

function Test() {
    return (
        <Layout>
            <Seo title="Privacy Policy" />

            <div className="flex my-6">
                <div className="w-6/12">
                    <div>
                        <ul className="card-menu flex flex-col">
                            <li className="flex w-full flex-grow"><button className="p-4 flex-grow uppercase flex justify-between cursor-pointer">Pioneering spirit <span className="block">icon</span></button></li>
                            <li className="flex w-full flex-grow"><button className="p-4 flex-grow uppercase flex justify-between cursor-pointer">Pioneering spirit <span className="block">icon</span></button></li>
                        </ul>
                    </div>
                </div>
                <div className="w-6/12">
                    <div className="rounded-lg bg-white overflow-hidden" >
                        <img src="" alt="Image" />
                        <div className="p-4">
                            <h3 clasName="text-uppercase">Title</h3>
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
                        <div className="flex">
                            <div>
                                <img className="rounded" src="../images/employees-photos/CarlosMayo.jpg" alt="Carlos" />
                            </div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                            <div>6</div>
                            <div>7</div>
                            <div>8</div>
                            <div>9</div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Test