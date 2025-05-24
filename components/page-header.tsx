import Link from "next/link"

interface PageHeaderProps {
  title: string
  breadcrumbs: {
    label: string
    href: string
  }[]
  backgroundImage?: string
}

export default function PageHeader({
  title,
  breadcrumbs,
  backgroundImage = "/5.jpg",
}: PageHeaderProps) {
  return (
    <div className="relative bg-cover bg-center py-20" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        <div className="flex justify-center items-center space-x-2 text-white">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <span className="mx-2">›</span>}
              <Link
                href={crumb.href}
                className={`hover:text-orange-400 ${index === breadcrumbs.length - 1 ? "text-orange-400" : ""}`}
              >
                {crumb.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
