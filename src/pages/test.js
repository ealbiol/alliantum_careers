import * as React from "react"
import Layout from "../components/Layout"

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

                {/* <div className="w-6/12">
                    <div className="rounded-lg bg-white overflow-hidden" >
                        <img src="" alt="Image" />
                        <div className="p-4">
                            <h3 className="text-uppercase">Title</h3>
                            <div>Descrip</div>
                        </div>
                    </div>
                </div> */}

            </div>

        </Layout>
    )
}

export default Test