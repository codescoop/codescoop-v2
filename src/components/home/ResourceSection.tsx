import React from 'react'
import Link from 'next/link'
import defaultHeroData from "../../json/home.json"

const ResourceSection = () => {
	return (
		<section id="resources" className="bg-white py-20">
			<div className="max-w-7xl mx-auto px-6">
				<h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
					Learning Resources
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{
						defaultHeroData?.resources?.map((resource, id) => {
							return (
								<Link
									key={id}
									href={resource?.linkPath}
									className="block bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
								>
									<div className="mb-4">
										<div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full text-xl font-bold">
											{resource?.logoText}
										</div>
									</div>

									<h3 className="text-xl font-semibold text-gray-800 mb-2">
										{resource?.title}
									</h3>
									<p className="text-gray-600 text-sm mb-4">
										{resource?.description}
									</p>
									<span className="inline-flex items-center text-blue-600 font-medium">
										{resource?.linkText}
									</span>
								</Link>
							)
						})
					}

				</div>
			</div>
		</section>
	)
}

export default ResourceSection