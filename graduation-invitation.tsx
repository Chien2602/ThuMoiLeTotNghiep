"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  Clock,
  MapPin,
  GraduationCap,
  Star,
  Heart,
  Sparkles,
  Award,
  Phone,
  Camera,
  Flower2,
  Quote,
  Crown,
  X,
  ChevronLeft,
  ChevronRight,
  Mail,
  Gift,
  Navigation,
  Car,
  Building,
  Lightbulb,
  Shield,
  Music,
  Zap,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"

// Enhanced Photo Modal Component
interface PhotoModalProps {
  isOpen: boolean
  currentIndex: number
  photos: any[]
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

const PhotoModal = ({ isOpen, currentIndex, photos, onClose, onNext, onPrev }: PhotoModalProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [imageScale, setImageScale] = useState(1)
  const [showInfo, setShowInfo] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true)
      setImageScale(0.95)
      const timer = setTimeout(() => {
        setIsLoading(false)
        setImageScale(1)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen, currentIndex])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onPrev()
      if (e.key === "ArrowRight") onNext()
      if (e.key === " ") {
        e.preventDefault()
        setShowInfo(!showInfo)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("mousemove", handleMouseMove)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isOpen, onClose, onNext, onPrev, showInfo])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
      {/* Enhanced backdrop with animated gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-black/70 via-pink-400/30 to-sky-300/40 backdrop-blur-md transition-all duration-1000 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      >
        {/* Enhanced animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${
                i % 4 === 0
                  ? "bg-pink-300/40"
                  : i % 4 === 1
                    ? "bg-sky-300/50"
                    : i % 4 === 2
                      ? "bg-pink-400/30"
                      : "bg-blue-300/40"
              } animate-bounce`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Floating sparkles effect */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/60 rounded-full animate-ping"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div
        className={`relative w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-4xl max-h-[95vh] sm:max-h-[90vh] md:max-h-[85vh] mx-auto transition-all duration-1000 transform ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Enhanced navigation buttons with glow effects */}
        <Button
          onClick={onPrev}
          className="hidden sm:flex absolute left-1 sm:left-2 md:-left-16 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-pink-300/40 to-pink-400/40 backdrop-blur-md border border-white/40 hover:from-pink-300/60 hover:to-pink-400/60 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-pink-400/25 hover:border-pink-300/60"
          size="sm"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white drop-shadow-lg" />
        </Button>

        <Button
          onClick={onNext}
          className="hidden sm:flex absolute right-1 sm:right-2 md:-right-16 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-sky-300/40 to-blue-300/40 backdrop-blur-md border border-white/40 hover:from-sky-300/60 hover:to-blue-300/60 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-sky-300/25 hover:border-blue-300/60"
          size="sm"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white drop-shadow-lg" />
        </Button>

        {/* Enhanced modal container */}
        <div className="bg-gradient-to-br from-white/20 via-pink-100/15 to-sky-100/20 backdrop-blur-3xl rounded-xl sm:rounded-2xl border border-white/40 overflow-hidden shadow-2xl shadow-pink-300/20 relative">
          {/* Subtle border glow effect */}
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-pink-200/20 via-pink-300/20 to-sky-200/20 opacity-50 blur-xl"></div>

          {/* Enhanced close button */}
          <Button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-40 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-red-400/40 to-pink-400/40 backdrop-blur-md border border-white/40 hover:from-red-400/60 hover:to-pink-400/60 text-white transition-all duration-500 hover:scale-110 hover:rotate-90 hover:shadow-lg hover:shadow-red-400/25 hover:border-red-300/60"
            size="sm"
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 drop-shadow-lg" />
          </Button>

          <div className="flex flex-col lg:grid lg:grid-cols-3 min-h-[40vh] sm:min-h-[50vh] w-full rounded-xl sm:rounded-2xl relative">
            {/* Enhanced image section */}
            <div className="lg:col-span-2 relative bg-gradient-to-br from-black/30 via-pink-400/20 to-sky-300/30 flex items-center justify-center p-2 sm:p-3 md:p-6 min-h-[30vh] sm:min-h-[35vh] lg:min-h-[50vh] rounded-xl sm:rounded-2xl overflow-hidden">
              {/* Enhanced animated background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200/10 via-pink-300/10 to-sky-200/10 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-sky-200/5 via-blue-200/5 to-pink-200/5 animate-pulse delay-1000"></div>
              </div>

              {/* Floating elements in image section */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-ping delay-500"></div>
                <div className="absolute bottom-1/3 left-1/4 w-0.5 h-0.5 bg-pink-300/40 rounded-full animate-pulse delay-800"></div>
              </div>

              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl">
                  <div className="relative">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-4 border-pink-300/60 border-t-pink-400 rounded-full animate-spin shadow-lg shadow-pink-400/30"></div>
                    <div className="absolute inset-1 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 border-4 border-sky-300/60 border-t-sky-400 rounded-full animate-spin animate-reverse shadow-lg shadow-sky-400/30"></div>
                    <div className="absolute inset-2 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 border-4 border-blue-300/60 border-t-blue-400 rounded-full animate-spin delay-500 shadow-lg shadow-blue-400/30"></div>
                  </div>
                </div>
              )}

              <img
                src={photos[currentIndex]?.src || "/placeholder.svg?height=600&width=400" || "/placeholder.svg"}
                alt={photos[currentIndex]?.title}
                className={`w-full h-[30vh] sm:h-[40vh] md:h-[50vh] object-cover rounded-lg sm:rounded-xl transition-all duration-1000 shadow-2xl shadow-black/30 hover:shadow-3xl hover:shadow-pink-400/20 ${
                  isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
                style={{ transform: `scale(${imageScale})` }}
                onLoad={() => setIsLoading(false)}
              />

              {/* Enhanced photo counter with glow */}
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-6 md:left-6 bg-gradient-to-r from-pink-400/90 to-pink-300/90 backdrop-blur-md rounded-full px-2 py-1 sm:px-3 sm:py-2 text-white font-bold border border-white/40 shadow-lg shadow-pink-400/30 hover:shadow-xl hover:shadow-pink-400/40 transition-all duration-300 hover:scale-105">
                <span className="text-xs sm:text-sm drop-shadow-lg">{currentIndex + 1}</span>
                <span className="mx-1 opacity-70">/</span>
                <span className="text-xs sm:text-sm opacity-90 drop-shadow-lg">{photos.length}</span>
              </div>

              {/* Enhanced mobile navigation buttons */}
              <div className="sm:hidden absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-3">
                <Button
                  onClick={onPrev}
                  className="w-9 h-9 rounded-full bg-gradient-to-r from-pink-300/40 to-pink-400/40 backdrop-blur-md border border-white/40 hover:from-pink-300/60 hover:to-pink-400/60 transition-all duration-300 hover:scale-110 shadow-lg shadow-pink-400/25 hover:shadow-xl hover:shadow-pink-400/35"
                  size="sm"
                >
                  <ChevronLeft className="w-4 h-4 text-white drop-shadow-lg" />
                </Button>
                <Button
                  onClick={onNext}
                  className="w-9 h-9 rounded-full bg-gradient-to-r from-sky-300/40 to-blue-300/40 backdrop-blur-md border border-white/40 hover:from-sky-300/60 hover:to-blue-300/60 transition-all duration-300 hover:scale-110 shadow-lg shadow-sky-300/25 hover:shadow-xl hover:shadow-sky-300/35"
                  size="sm"
                >
                  <ChevronRight className="w-4 h-4 text-white drop-shadow-lg" />
                </Button>
              </div>
            </div>

            {/* Enhanced content section */}
            <div className="bg-gradient-to-br from-white/30 via-pink-50/20 to-sky-50/25 backdrop-blur-2xl p-3 sm:p-4 md:p-6 flex flex-col border-t lg:border-t-0 lg:border-l border-white/30 max-h-[40vh] sm:max-h-[45vh] lg:max-h-none overflow-y-auto rounded-xl sm:rounded-2xl relative">
              {/* Subtle content glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/5 to-sky-50/5 rounded-xl sm:rounded-2xl opacity-50"></div>

              <div className="mb-3 sm:mb-4 relative z-10">
                {/* Enhanced camera icon with glow */}
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-400 to-pink-300 rounded-lg sm:rounded-xl mb-3 sm:mb-4 shadow-lg shadow-pink-400/30 hover:shadow-xl hover:shadow-pink-400/40 transition-all duration-300 hover:scale-105 hover:rotate-3">
                  <Camera className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white drop-shadow-lg" />
                </div>
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-black mb-2 leading-tight drop-shadow-lg hover:drop-shadow-xl transition-all duration-300">
                  {photos[currentIndex]?.title}
                </h2>
                <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-pink-300 to-pink-400 rounded-full shadow-lg shadow-pink-300/50 hover:shadow-xl hover:shadow-pink-300/60 transition-all duration-300"></div>
              </div>

              <div className="flex-1 mb-3 sm:mb-4 relative z-10">
                <p className="text-black/95 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm drop-shadow-sm hover:drop-shadow-md transition-all duration-300">
                  {photos[currentIndex]?.description}
                </p>
                <div className="space-y-2 sm:space-y-3">
                  {/* Enhanced date card */}
                  <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gradient-to-r from-white/25 to-pink-100/15 backdrop-blur-md rounded-xl border border-white/40 hover:border-pink-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-300/20 hover:scale-[1.02] hover:bg-gradient-to-r hover:from-white/30 hover:to-pink-100/20">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-pink-400 to-pink-300 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-400/30 hover:shadow-xl hover:shadow-pink-400/40 transition-all duration-300 hover:scale-110">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white drop-shadow-lg" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-black/80 font-medium text-xs">Ngày chụp</p>
                      <p className="text-black/95 font-semibold text-xs sm:text-sm truncate drop-shadow-sm">
                        {photos[currentIndex]?.date}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced location card */}
                  <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gradient-to-r from-white/25 to-sky-100/15 backdrop-blur-md rounded-xl border border-white/40 hover:border-sky-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-300/20 hover:scale-[1.02] hover:bg-gradient-to-r hover:from-white/30 hover:to-sky-100/20">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-sky-400 to-blue-300 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-sky-400/30 hover:shadow-xl hover:shadow-sky-400/40 transition-all duration-300 hover:scale-110">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white drop-shadow-lg" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-black/80 font-medium text-xs">Địa điểm</p>
                      <p className="text-black/95 font-semibold text-xs sm:text-sm truncate drop-shadow-sm">
                        {photos[currentIndex]?.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enhanced quote section */}
                <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-gradient-to-r from-white/25 via-pink-50/15 to-sky-50/15 backdrop-blur-md rounded-xl border border-white/40 hover:border-pink-200/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-200/20 hover:scale-[1.02] hover:bg-gradient-to-r hover:from-white/30 hover:via-pink-50/20 hover:to-sky-50/20">
                  <div className="flex items-start space-x-2">
                    <Quote className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-pink-300 flex-shrink-0 mt-0.5 sm:mt-1 drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 hover:scale-110" />
                    <p className="text-black/95 italic leading-relaxed text-xs sm:text-sm drop-shadow-sm hover:drop-shadow-md transition-all duration-300">
                      "Mỗi khoảnh khắc đều là một kỷ niệm đáng trân trọng trong hành trình học tập của em."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main Component
export default function GraduationInvitation() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const photos = [
    {
      src: "/images/room.jpg?height=600&width=400",
      title: "Lễ 30/4",
      description: "Thật may mắn khi được trải qua cùng người tôi luôn tin tưởng trong khoảnh khắc thiêng liêng này.",
      date: "30/04/2025",
      location: "KTX sư phạm TP.HCM",
    },
    {
      src: "/images/class.jpg?height=600&width=400",
      title: "Cùng lớp học",
      description: "Một trải nghiệm đầu đời với bao cảm xúc, bài học quý báu trong hành trình học tập.",
      date: "16/04/2024",
      location: "Trường Tiểu học Phú Định",
    },
    {
      src: "/images/friend.jpg?height=600&width=400",
      title: "Cùng tâm giao",
      description: "Thật buồn vì biết bạn quá trễ nhưng cảm ơn bạn đã làm cuộc sống đại học của tôi thêm phần rực rỡ.",
      date: "23/01/2025",
      location: "Kim Sơn, Ninh Bình",
    },
    {
      src: "/images/trai.jpg?height=600&width=400",
      title: "Kỉ niệm khó quên",
      description:
        "Sẽ mãi nhớ từng con người nơi đây, rất may mắn khi được gặp các bạn trong những ngày tháng đẹp nhất.",
      date: "31/12/2024",
      location: "KTX sư phạm TP.HCM",
    },
  ]

  useEffect(() => {
    setIsLoaded(true)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 },
    )

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    document.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      observer.disconnect()
      document.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const isVisible = (sectionId: string) => visibleSections.has(sectionId)

  const openPhotoModal = (index: number) => {
    setCurrentPhotoIndex(index)
    setIsPhotoModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closePhotoModal = () => {
    setIsPhotoModalOpen(false)
    document.body.style.overflow = "unset"
  }

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-sky-50 relative overflow-hidden">
      {/* Enhanced Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-10 left-5 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-200/25 to-pink-300/15 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-32 right-8 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-sky-200/30 to-blue-200/20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-8 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-pink-300/20 to-pink-200/12 rounded-full blur-4xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-16 right-6 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-sky-300/25 to-blue-300/15 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />

        {/* Enhanced Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full ${
              i % 4 === 0
                ? "bg-pink-300/60"
                : i % 4 === 1
                  ? "bg-sky-300/70"
                  : i % 4 === 2
                    ? "bg-pink-400/50"
                    : "bg-blue-300/60"
            } animate-bounce`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Interactive Mouse Trail */}
        <div
          className="absolute w-32 h-32 bg-gradient-radial from-pink-200/25 via-pink-300/15 to-transparent rounded-full blur-2xl transition-all duration-300 pointer-events-none"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
            transform: `translate3d(0, ${scrollY * 0.05}px, 0)`,
          }}
        />

        {/* Enhanced Animated Wave Patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-200/15 via-transparent to-sky-200/15 animate-pulse" />
          <div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-blue-200/12 via-transparent to-pink-200/12 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-100/10 via-transparent to-sky-100/10 animate-pulse"
            style={{ animationDelay: "4s" }}
          />
        </div>

        {/* Floating Geometric Shapes */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className={`absolute ${
              i % 3 === 0
                ? "w-3 h-3 bg-pink-300/30 rounded-full"
                : i % 3 === 1
                  ? "w-2 h-2 bg-sky-300/40 rotate-45"
                  : "w-4 h-1 bg-blue-300/25 rounded-full"
            } animate-pulse`}
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Hero Section */}
      <section
        id="hero"
        ref={(el) => {
          sectionRefs.current.hero = el
        }}
        className={`min-h-[85vh] flex items-center justify-center px-4 sm:px-6 transition-all duration-1500 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        <div className="text-center max-w-4xl mx-auto relative">
          {/* Enhanced Graduate Photo */}
          <div className="relative inline-block mb-4 sm:mb-6 group">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-pink-200/40 via-pink-300/30 to-sky-200/40 rounded-full p-1.5 sm:p-2 group-hover:scale-110 transition-all duration-1000 shadow-2xl relative overflow-hidden animate-pulse">
              <div
                className="absolute inset-0 bg-gradient-to-r from-pink-200/40 via-pink-300/40 to-sky-200/40 rounded-full animate-spin"
                style={{ animationDuration: "8s" }}
              />
              <div className="w-full h-full bg-white/98 rounded-full p-1.5 border border-white/90 shadow-inner relative z-10">
                <div className="w-full h-full bg-gradient-to-br from-pink-50/30 via-pink-100/20 to-sky-50/30 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/me.jpg?height=200&width=200"
                    alt="Graduate"
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 group-hover:brightness-110 transition-all duration-1000"
                  />
                </div>
              </div>
            </div>

            {/* Enhanced Floating Icons - Tương phản tốt hơn */}
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-white shadow-xl border-2 border-pink-400 rounded-full flex items-center justify-center animate-bounce">
              <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500" />
            </div>
            <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-5 h-5 sm:w-7 sm:h-7 bg-white shadow-xl border-2 border-sky-400 rounded-full flex items-center justify-center animate-pulse">
              <Award className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-sky-500" />
            </div>
            <div className="absolute top-1/4 -left-2 sm:-left-3 w-4 h-4 sm:w-6 sm:h-6 bg-white shadow-xl border-2 border-pink-400 rounded-full flex items-center justify-center animate-ping">
              <Star className="w-2 h-2 sm:w-3 sm:h-3 text-pink-500" />
            </div>
            <div className="absolute top-3/4 -right-2 sm:-right-3 w-4 h-4 sm:w-6 sm:h-6 bg-white shadow-xl border-2 border-blue-400 rounded-full flex items-center justify-center animate-pulse">
              <Crown className="w-2 h-2 sm:w-3 sm:h-3 text-blue-500" />
            </div>

            {/* Additional Floating Elements */}
            <div className="absolute top-1/3 right-1/4 w-3 h-3 sm:w-4 sm:h-4">
              <Sparkles className="w-full h-full text-pink-400 animate-pulse" />
            </div>
            <div className="absolute bottom-1/3 left-1/4 w-2.5 h-2.5 sm:w-3 sm:h-3">
              <Heart className="w-full h-full text-pink-300 animate-bounce" />
            </div>

            {/* Orbiting Elements */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
              <div className="absolute -top-4 left-1/2 w-2 h-2 bg-sky-300/60 rounded-full"></div>
              <div className="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-pink-300/60 rounded-full"></div>
              <div className="absolute -bottom-4 left-1/2 w-2 h-2 bg-blue-300/60 rounded-full"></div>
              <div className="absolute top-1/2 -left-4 w-1.5 h-1.5 bg-pink-400/60 rounded-full"></div>
            </div>
          </div>

          {/* Enhanced Title Section */}
          <div className="mb-4 sm:mb-6 relative">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-pink-500 via-sky-400 to-pink-500 bg-clip-text text-transparent leading-tight animate-pulse">
              Lễ Tốt Nghiệp
            </h1>
            <div className="flex justify-center items-center mb-3 sm:mb-4 space-x-3 sm:space-x-4">
              <div className="w-12 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-pink-400 via-pink-300 to-pink-400 rounded-full shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent animate-pulse" />
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-pink-400 via-pink-300 to-sky-400 rounded-full flex items-center justify-center animate-pulse shadow-xl">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <div className="w-12 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-sky-400 via-blue-300 to-sky-400 rounded-full shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent animate-pulse" />
              </div>
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed px-2 sm:px-4 font-light mb-4 sm:mb-6">
              Dấu mốc quan trọng khép lại những năm tháng tuổi trẻ đầy nhiệt huyết,
              <br className="hidden sm:block" />
              để bắt đầu hành trình mới với bao ước mơ và thử thách
            </p>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-2 left-1/4 w-4 h-4 text-pink-300/60 animate-bounce">
              <Music className="w-full h-full" />
            </div>
            <div className="absolute -top-1 right-1/4 w-3 h-3 text-sky-300/60 animate-pulse">
              <Zap className="w-full h-full" />
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="mt-6 sm:mt-8 animate-bounce">
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-pink-400 rounded-full flex justify-center bg-white/60 backdrop-blur-sm shadow-xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-pink-100/30 to-transparent rounded-full" />
              <div className="w-1.5 h-2.5 sm:w-2 sm:h-3 bg-gradient-to-b from-pink-400 to-pink-300 rounded-full mt-1.5 sm:mt-2 animate-pulse relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Photo Gallery Section */}
      <section
        id="gallery"
        ref={(el) => {
          sectionRefs.current.gallery = el
        }}
        className={`py-6 sm:py-8 px-3 sm:px-6 transition-all duration-1000 ${
          isVisible("gallery") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-6 sm:mb-8 p-4 sm:p-6 bg-white/80 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-pink-100/60 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-200/30 to-pink-300/30 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-sky-200/30 to-blue-200/30 rounded-full blur-xl" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-500 via-sky-400 to-pink-500 bg-clip-text mb-3 sm:mb-4 relative z-10">
              Kỷ Niệm Đẹp
            </h2>
            <div className="flex justify-center mb-3 sm:mb-4 relative z-10">
              <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-pink-400 via-pink-300 to-sky-400 rounded-full shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent animate-pulse" />
              </div>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 relative z-10">Một phần thanh xuân của tôi</p>

            {/* Floating Sparkles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <Sparkles
                  key={i}
                  className="absolute w-3 h-3 text-pink-400/50 animate-pulse"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${10 + Math.random() * 80}%`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Photo Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {photos.map((photo, i) => (
              <div
                key={i}
                className={`group relative transition-all duration-1000 cursor-pointer ${
                  isVisible("gallery") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => openPhotoModal(i)}
              >
                <div className="relative bg-white/90 backdrop-blur-2xl p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-pink-100/60 overflow-hidden group-hover:scale-[1.03] group-hover:shadow-2xl transition-all duration-700 shadow-xl">
                  <div className="relative overflow-hidden rounded-lg sm:rounded-xl">
                    <img
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.title}
                      className="w-full h-24 xs:h-28 sm:h-32 md:h-36 lg:h-40 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />

                    {/* Enhanced Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-400/95 via-pink-300/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-end justify-center pb-2">
                      <div className="flex items-center space-x-1 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                        <Camera className="w-3 h-3 animate-pulse" />
                        <span className="font-semibold text-xs">Xem chi tiết</span>
                        <Sparkles className="w-3 h-3 animate-bounce" />
                      </div>
                    </div>

                    {/* Enhanced Camera Icon */}
                    <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-pink-400 via-pink-300 to-sky-400 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-500">
                      <Camera className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-1 left-1 w-2 h-2 sm:w-3 sm:h-3 text-pink-400/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Star className="w-full h-full animate-pulse" />
                    </div>
                  </div>

                  {/* Enhanced Photo Info */}
                  <div className="mt-2 sm:mt-3 text-center">
                    <h3 className="text-xs sm:text-sm font-bold text-gray-800 mb-1 sm:mb-2 line-clamp-1">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-2 line-clamp-2 px-1">{photo.description}</p>
                    <div className="inline-block px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-pink-100/80 via-pink-200/60 to-sky-100/80 rounded-full text-xs text-gray-700 font-medium border border-pink-200/60 shadow-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-pulse" />
                      <span className="relative z-10">{photo.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Main Information Section */}
      <section
        id="main-info"
        ref={(el) => {
          sectionRefs.current["main-info"] = el
        }}
        className={`py-6 sm:py-8 px-3 sm:px-6 transition-all duration-1000 ${
          isVisible("main-info") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-2xl border border-pink-100/60 shadow-2xl rounded-2xl sm:rounded-3xl overflow-hidden relative">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200/40 to-pink-300/40 rounded-full blur-3xl animate-pulse" />
              <div
                className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-sky-200/40 to-blue-200/40 rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>

            <CardContent className="p-4 sm:p-6 md:p-8 relative z-10">
              {/* Enhanced Header */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <Flower2 className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 animate-pulse" />
                    <div className="w-12 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-pink-400 via-pink-300 to-pink-400 rounded-full shadow-lg" />
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400 animate-pulse" />
                    <div className="w-12 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-sky-400 via-blue-300 to-sky-400 rounded-full shadow-lg hidden sm:block" />
                    <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 animate-pulse hidden sm:block" />
                  </div>
                </div>

                <div className="p-4 sm:p-6 bg-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-pink-100/80 shadow-2xl mb-4 sm:mb-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-100/50 to-pink-200/30 rounded-full blur-2xl" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 via-pink-500 to-sky-500 bg-clip-text text-transparent mb-3 sm:mb-4 relative z-10">
                    Thư Mời Dự Lễ
                  </h2>
                  <div className="flex justify-center items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4 relative z-10">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-pink-400 via-pink-300 to-pink-400 rounded-full flex items-center justify-center shadow-xl">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-pink-400 via-pink-300 to-sky-400 rounded-full shadow-lg" />
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-sky-400 via-blue-300 to-sky-400 rounded-full flex items-center justify-center shadow-xl">
                      <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 relative z-10">
                    Thân gửi những người tôi yêu
                  </p>
                </div>
              </div>

              {/* Enhanced Graduate Info */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="p-4 sm:p-6 bg-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-pink-100/80 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-pink-100/30 to-sky-50/50" />
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-400 via-pink-300 to-sky-400 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto shadow-2xl relative z-10">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 via-sky-400 to-pink-500 bg-clip-text text-transparent mb-2 sm:mb-3 relative z-10">
                    Trần Thị Thu
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-1 sm:mb-2 font-medium relative z-10">
                    Cử nhân Sư phạm giáo dục tiểu học
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4 sm:mb-6 relative z-10">
                    Đại học Sư phạm Thành phố Hồ Chí Minh
                  </p>
                  <div className="p-3 sm:p-4 bg-gradient-to-r from-pink-100/80 via-pink-200/60 to-sky-100/80 rounded-xl sm:rounded-2xl border border-pink-200/70 shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-pulse" />
                    <p className="text-sm sm:text-base md:text-lg text-pink-600 font-bold relative z-10">
                      Thân mời bạn tham dự
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Event Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {[
                  {
                    icon: Calendar,
                    title: "Ngày",
                    value: "15 tháng 7, 2025",
                    iconBg: "bg-pink-400",
                    iconColor: "text-white",
                    cardBg: "bg-white/95",
                    borderColor: "border-pink-200/60",
                  },
                  {
                    icon: Clock,
                    title: "Thời gian",
                    value: "10:30 AM",
                    iconBg: "bg-sky-400",
                    iconColor: "text-white",
                    cardBg: "bg-white/95",
                    borderColor: "border-sky-200/60",
                  },
                  {
                    icon: MapPin,
                    title: "Địa điểm",
                    value: "Hội trường B\nĐại học Sư phạm TP.HCM",
                    iconBg: "bg-blue-400",
                    iconColor: "text-white",
                    cardBg: "bg-white/95",
                    borderColor: "border-blue-200/60",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`text-center p-4 sm:p-6 ${item.cardBg} backdrop-blur-2xl rounded-2xl sm:rounded-3xl border ${item.borderColor} hover:scale-105 transition-all duration-700 shadow-xl hover:shadow-2xl relative overflow-hidden group`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 ${item.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-500`}
                    >
                      <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.iconColor}`} />
                    </div>
                    <p className="font-bold text-gray-800 text-sm sm:text-base mb-2 relative z-10">{item.title}</p>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed relative z-10">
                      {item.value.split("\n").map((line, idx) => (
                        <span key={idx}>
                          {line}
                          {idx !== item.value.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Invitation Messages Section */}
      <section
        id="invitation"
        ref={(el) => {
          sectionRefs.current.invitation = el
        }}
        className={`py-6 sm:py-8 px-3 sm:px-6 transition-all duration-1000 ${
          isVisible("invitation") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-2xl border border-pink-100/60 shadow-2xl rounded-2xl sm:rounded-3xl relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-pink-200/40 to-pink-300/40 rounded-full blur-3xl animate-pulse" />
              <div
                className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-sky-200/40 to-blue-200/40 rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>

            <CardContent className="p-4 sm:p-6 md:p-8 relative z-10">
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-400 via-pink-300 to-sky-400 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl">
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 via-pink-500 to-sky-500 bg-clip-text text-transparent mb-3 sm:mb-4">
                  Lời mời chân thành
                </h3>
                <div className="w-20 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-pink-400 via-pink-300 to-sky-400 rounded-full mx-auto shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent animate-pulse" />
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    icon: Flower2,
                    title: "Đến những người thân yêu",
                    content:
                      "Buổi lễ tốt nghiệp này là dấu mốc quan trọng trong cuộc đời mình và niềm vui ấy sẽ trọn vẹn hơn nếu có sự hiện diện của bạn. Mình rất mong mọi người sẽ dành thời gian quý báu để đến dự lễ tốt nghiệp của mình.",
                    bgGradient: "from-white/95 via-pink-50/80 to-pink-100/60",
                    iconGradient: "from-pink-400 via-pink-300 to-pink-400",
                  },
                  {
                    icon: Gift,
                    title: "Lời cảm ơn",
                    content:
                      "Mình xin gửi lời cảm ơn sâu sắc đến tất cả mọi người đã luôn bên cạnh, động viên mình trong suốt quá trình học tập. Mong rằng mọi người sẽ dành thời gian đến dự lễ tốt nghiệp để cùng mình đánh dấu cột mốc quan trọng này.",
                    bgGradient: "from-sky-50/80 via-blue-50/80 to-sky-100/60",
                    iconGradient: "from-sky-400 via-blue-300 to-sky-400",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`text-center p-4 sm:p-6 bg-gradient-to-br ${item.bgGradient} backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-pink-100/60 hover:scale-[1.02] transition-all duration-700 shadow-xl hover:shadow-2xl relative overflow-hidden group`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${item.iconGradient} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-500`}
                    >
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed relative z-10">{item.content}</p>
                  </div>
                ))}
              </div>

              {/* Enhanced Contact Information */}
              <div className="mt-6 sm:mt-8 text-center p-4 sm:p-6 bg-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-pink-100/80 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-pink-100/20 to-sky-50/30" />
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-6 sm:mb-8 relative z-10">
                  Thông tin liên hệ
                </h4>
                <div className="space-y-4 sm:space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 relative z-10">
                  {/* Enhanced Phone Contact */}
                  <div className="flex items-center justify-start space-x-3 p-3 sm:p-4 bg-white/95 rounded-xl sm:rounded-2xl border border-pink-200/60 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-400 rounded-xl flex items-center justify-center shadow-2xl flex-shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="text-left relative z-10">
                      <p className="text-xs text-pink-500 font-semibold uppercase tracking-wide mb-1">Điện thoại</p>
                      <p className="text-sm sm:text-base font-bold text-gray-800">0965187496</p>
                    </div>
                  </div>

                  {/* Enhanced Email Contact */}
                  <div className="flex items-center justify-start space-x-3 p-3 sm:p-4 bg-white/95 rounded-xl sm:rounded-2xl border border-sky-200/60 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-sky-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-400 rounded-xl flex items-center justify-center shadow-2xl flex-shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="text-left min-w-0 flex-1 relative z-10">
                      <p className="text-xs text-sky-500 font-semibold uppercase tracking-wide mb-1">Email</p>
                      <p className="text-xs sm:text-sm font-bold text-gray-800 break-all">thutran081002@gmail.com</p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Call to Action */}
                <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-gradient-to-r from-pink-100/80 via-pink-200/60 to-sky-100/80 rounded-xl sm:rounded-2xl border border-pink-200/70 shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-pulse" />
                  <p className="text-sm sm:text-base font-semibold bg-gradient-to-r from-pink-500 via-pink-400 to-sky-500 bg-clip-text text-transparent flex items-center justify-center space-x-2 relative z-10">
                    <Heart className="w-4 h-4 text-pink-400 flex-shrink-0 animate-pulse" />
                    <span>Rất mong được gặp mọi người!</span>
                    <Sparkles className="w-4 h-4 text-sky-400 flex-shrink-0 animate-bounce" />
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Directions Section */}
      <section
        id="directions"
        ref={(el) => {
          sectionRefs.current.directions = el
        }}
        className={`py-6 sm:py-8 px-3 sm:px-6 transition-all duration-1000 ${
          isVisible("directions") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-400 via-pink-300 to-sky-400 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 via-pink-500 to-sky-500 bg-clip-text text-transparent mb-3 sm:mb-4">
              Hướng Dẫn Đi Đường
            </h2>
            <div className="w-20 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-pink-400 via-pink-300 to-sky-400 rounded-full mx-auto mb-3 sm:mb-4 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent animate-pulse" />
            </div>
            <p className="text-sm sm:text-base text-gray-600">Đại học Sư phạm Thành phố Hồ Chí Minh</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Enhanced Map */}
            <div className="bg-white/80 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-pink-100/60 overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-pink-100/20 to-sky-50/30" />
              <div className="p-4 sm:p-6 relative z-10">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                  <MapPin className="w-5 h-5 text-pink-400 mr-2 animate-pulse" />
                  Bản đồ chỉ đường
                </h3>
                <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden border border-pink-100/60 shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.424184!2d106.6912!3d10.7622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1b7c3ed289%3A0xa06651894598e488!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTw6BpIEfDsm4!5e0!3m2!1svi!2svn!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl sm:rounded-2xl"
                  />
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white/95 backdrop-blur-lg rounded-lg sm:rounded-xl p-2 sm:p-3 border border-pink-100/60 shadow-xl">
                    <div className="flex items-center space-x-1.5 sm:space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-pink-300 rounded-full animate-pulse shadow-lg" />
                      <span className="text-xs font-semibold text-gray-800">Đại học Sư phạm TP.HCM</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a
                    href="https://maps.google.com/maps?q=Đại+học+Sư+phạm+Thành+phố+Hồ+Chí+Minh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-pink-400 via-pink-300 to-pink-400 text-white rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-500 text-xs font-medium shadow-xl relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-300/30 to-pink-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <MapPin className="w-3 h-3 relative z-10" />
                    <span className="relative z-10">Mở Google Maps</span>
                  </a>
                  <a
                    href="https://maps.google.com/maps?daddr=Đại+học+Sư+phạm+Thành+phố+Hồ+Chí+Minh&dirflg=d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-sky-400 via-blue-300 to-sky-400 text-white rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-500 text-xs font-medium shadow-xl relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300/30 to-sky-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Navigation className="w-3 h-3 relative z-10" />
                    <span className="relative z-10">Chỉ đường</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Enhanced Venue Details */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-br from-pink-50/90 via-pink-100/80 to-sky-50/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-pink-100/80 p-4 sm:p-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-200/30 to-pink-300/30 rounded-full blur-2xl" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center relative z-10">
                  <Building className="w-5 h-5 text-pink-400 mr-2 animate-pulse" />
                  Thông tin địa điểm
                </h3>
                <div className="space-y-3 sm:space-y-4 relative z-10">
                  {[
                    {
                      icon: MapPin,
                      title: "Địa chỉ",
                      content: "280 An Dương Vương, Phường 4, Quận 5, TP.HCM",
                      iconBg: "bg-pink-400",
                      iconColor: "text-white",
                    },
                    {
                      icon: Clock,
                      title: "Thời gian mở cửa",
                      content: "7:00 AM - 10:00 PM (Ngày lễ tốt nghiệp)",
                      iconBg: "bg-sky-400",
                      iconColor: "text-white",
                    },
                    {
                      icon: Phone,
                      title: "Liên hệ",
                      content: "0965187496",
                      iconBg: "bg-blue-400",
                      iconColor: "text-white",
                    },
                    {
                      icon: Car,
                      title: "Bãi đậu xe",
                      content: "Có bãi đậu xe miễn phí trong khuôn viên trường",
                      iconBg: "bg-pink-300",
                      iconColor: "text-white",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 sm:p-4 bg-white/95 rounded-xl sm:rounded-2xl border border-pink-100/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-pink-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 ${item.iconBg} rounded-lg sm:rounded-xl flex items-center justify-center shadow-xl flex-shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.iconColor}`} />
                      </div>
                      <div className="min-w-0 flex-1 relative z-10">
                        <p className="font-semibold text-gray-800 text-xs sm:text-sm mb-1">{item.title}</p>
                        <p className="text-gray-700 text-xs leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Tips */}
          <div className="mt-6 sm:mt-8 bg-white/80 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-pink-100/60 p-4 sm:p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50/20 via-pink-100/10 to-sky-50/20" />
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-6 sm:mb-8 flex items-center justify-center relative z-10">
              <Lightbulb className="w-5 h-5 text-pink-400 mr-2 animate-pulse" />
              Lưu ý quan trọng
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 relative z-10">
              {[
                {
                  icon: Clock,
                  title: "Đến sớm",
                  content: "Nên đến trước 30 phút để ổn định chỗ ngồi",
                  iconBg: "bg-pink-400",
                  iconColor: "text-white",
                },
                {
                  icon: Shield,
                  title: "An toàn",
                  content: "Tuân thủ quy định an toàn của trường",
                  iconBg: "bg-sky-400",
                  iconColor: "text-white",
                },
                {
                  icon: Camera,
                  title: "Chụp ảnh",
                  content: "Có thể chụp ảnh trong khu vực được phép",
                  iconBg: "bg-blue-400",
                  iconColor: "text-white",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 sm:p-4 bg-white/95 rounded-xl sm:rounded-2xl border border-pink-100/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-pink-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div
                    className={`w-7 h-7 ${item.iconBg} rounded-lg flex items-center justify-center shadow-xl flex-shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className={`w-3 h-3 ${item.iconColor}`} />
                  </div>
                  <div className="relative z-10">
                    <p className="font-semibold text-gray-800 text-xs mb-1">{item.title}</p>
                    <p className="text-gray-700 text-xs leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <section
        id="footer"
        ref={(el) => {
          sectionRefs.current.footer = el
        }}
        className={`py-6 sm:py-8 px-3 sm:px-6 transition-all duration-1000 ${
          isVisible("footer") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 bg-white/80 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-pink-100/60 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-pink-100/20 to-sky-50/30" />
            <div className="flex justify-center mb-6 sm:mb-8 relative z-10">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <Flower2 className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 animate-pulse" />
                <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-pink-400 via-pink-300 to-pink-400 rounded-full shadow-lg" />
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400 animate-pulse" />
                <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-sky-400 via-blue-300 to-sky-400 rounded-full shadow-lg hidden sm:block" />
                <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 animate-pulse hidden sm:block" />
              </div>
            </div>
            <p className="text-lg sm:text-xl text-gray-700 font-light mb-4 sm:mb-6 relative z-10">
              Với tình cảm và sự biết ơn sâu sắc
            </p>
            <div className="flex justify-center space-x-1.5 sm:space-x-2 mb-4 sm:mb-6 relative z-10">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                    i % 4 === 0
                      ? "bg-pink-300/80"
                      : i % 4 === 1
                        ? "bg-sky-300/80"
                        : i % 4 === 2
                          ? "bg-pink-400/80"
                          : "bg-blue-300/80"
                  } animate-pulse shadow-lg`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <div className="text-gray-600 text-xs sm:text-sm leading-relaxed relative z-10">
              © 2025 - Thiệp mời tốt nghiệp được thiết kế với tình yêu
              <br />
              <span className="text-pink-500 font-semibold">Thu</span> dành cho mọi người
            </div>
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      <PhotoModal
        isOpen={isPhotoModalOpen}
        currentIndex={currentPhotoIndex}
        photos={photos}
        onClose={closePhotoModal}
        onNext={nextPhoto}
        onPrev={prevPhoto}
      />
    </div>
  )
}
