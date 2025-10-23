import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Clock, TrendingUp, DollarSign } from "lucide-react";

interface CourseCardProps {
  title: string;
  slug: string;
  shortDescription?: string;
  instructor?: string;
  price: number;
  duration?: string;
  level?: string;
  thumbnail?: string;
}

export function CourseCard({
  title,
  slug,
  shortDescription,
  instructor,
  price,
  duration,
  level,
  thumbnail,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${slug}`}>
      <Card hover className="h-full flex flex-col">
        {/* Thumbnail */}
        <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
          {thumbnail ? (
            <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="text-6xl font-bold text-purple-300">AI</div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          {/* Level Badge */}
          {level && (
            <div className="inline-flex items-center mb-2">
              <span className="text-xs font-semibold px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                {level}
              </span>
            </div>
          )}

          <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>

          {shortDescription && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
              {shortDescription}
            </p>
          )}

          {/* Instructor */}
          {instructor && (
            <p className="text-sm text-gray-500 mb-3">
              By {instructor}
            </p>
          )}

          {/* Footer Info */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              {duration && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{duration}</span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-1 font-bold text-lg">
              {price === 0 ? (
                <span className="text-green-600">Free</span>
              ) : (
                <>
                  <DollarSign className="w-5 h-5" />
                  <span>{price}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
