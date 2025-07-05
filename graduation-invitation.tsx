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
  Bus,
  Train,
  Building,
  Lightbulb,
  Shield,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"

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

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true)
      setImageScale(0.9)
      const timer = setTimeout(() => {
        setIsLoading(false)
        setImageScale(1)
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [isOpen, currentIndex])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onPrev()
      if (e.key === "ArrowRight") onNext()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, onNext, onPrev])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Enhanced Backdrop */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/20 to-black/70 backdrop-blur-md transition-all duration-700 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-6xl max-h-[100vh] mx-auto transition-all duration-700 transform ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Navigation Buttons */}
        <Button
          onClick={onPrev}
          className="absolute -left-16 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          size="sm"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </Button>
        <Button
          onClick={onNext}
          className="absolute -right-16 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          size="sm"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </Button>

        {/* Enhanced Modal Container */}
        <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 overflow-hidden">
          {/* Close Button */}
          <Button
            onClick={onClose}
            className="absolute top-6 right-6 z-40 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110 hover:rotate-90"
            size="sm"
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Enhanced Two Column Layout */}
          <div className="grid lg:grid-cols-3 min-h-[60vh] w-full">
            {/* Image Section */}
            <div className="lg:col-span-2 relative bg-gradient-to-br from-black/5 to-purple-900/10 flex items-center justify-center p-6">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                  <div className="relative">
                    <div className="w-16 h-16 border-4 border-pink-400/30 border-t-pink-400 rounded-full animate-spin"></div>
                    <div className="absolute inset-2 w-12 h-12 border-4 border-rose-400/30 border-t-rose-400 rounded-full animate-spin animate-reverse"></div>
                  </div>
                </div>
              )}
              <img
                src={photos[currentIndex]?.src || "/placeholder.svg"}
                alt={photos[currentIndex]?.title}
                className={`max-w-full max-h-full object-contain rounded-2xl transition-all duration-700 ${
                  isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
                style={{ transform: `scale(${imageScale})` }}
                onLoad={() => setIsLoading(false)}
              />

              {/* Enhanced Image Counter */}
              <div className="absolute top-8 left-8 bg-gradient-to-r from-pink-500/80 to-rose-500/80 backdrop-blur-md rounded-full px-6 py-3 text-white font-semibold border border-white/20">
                <span className="text-lg">{currentIndex + 1}</span>
                <span className="mx-2 opacity-70">/</span>
                <span className="text-lg opacity-90">{photos.length}</span>
              </div>
            </div>

            {/* Enhanced Info Section */}
            <div className="bg-gradient-to-br from-white/15 to-pink-50/10 backdrop-blur-xl p-8 flex flex-col border-l border-white/10">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl mb-6">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 leading-tight">{photos[currentIndex]?.title}</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"></div>
              </div>

              {/* Description */}
              <div className="flex-1 mb-6">
                <p className="text-white/90 leading-relaxed mb-6 text-lg">{photos[currentIndex]?.description}</p>

                {/* Enhanced Details */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/70 font-medium text-sm">Ngày chụp</p>
                      <p className="text-white font-semibold text-lg">{photos[currentIndex]?.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/70 font-medium text-sm">Địa điểm</p>
                      <p className="text-white font-semibold text-lg">{photos[currentIndex]?.location}</p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Quote */}
                <div className="mt-6 p-4 bg-gradient-to-r from-white/10 to-pink-50/5 backdrop-blur-md rounded-2xl border border-white/20">
                  <div className="flex items-start space-x-3">
                    <Quote className="w-8 h-8 text-pink-300 flex-shrink-0 mt-1" />
                    <p className="text-white/90 italic leading-relaxed text-lg">
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

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const photos = [
    {
      src: "/images/graduation-ceremony.jpg",
      title: "Lễ Tốt Nghiệp",
      description:
        "Khoảnh khắc thiêng liêng khi nhận bằng tốt nghiệp sau bao năm miệt mài học tập. Niềm vui và tự hào hiện rõ trên gương mặt trong ngày trọng đại này.",
      date: "15/12/2024",
      location: "Hội trường A1",
    },
    {
      src: "/images/friends-graduation.jpg",
      title: "Cùng Bạn Bè",
      description:
        "Những người bạn thân thiết đã cùng nhau vượt qua mọi khó khăn trong suốt quá trình học tập. Tình bạn đẹp sẽ mãi là kỷ niệm không thể nào quên.",
      date: "15/12/2024",
      location: "Sân trường",
    },
    {
      src: "/images/family-graduation.jpg",
      title: "Gia Đình Hạnh Phúc",
      description:
        "Gia đình là nguồn động lực lớn nhất giúp em hoàn thành chặng đường học tập. Niềm hạnh phúc được chia sẻ cùng những người thân yêu nhất.",
      date: "15/12/2024",
      location: "Khuôn viên trường",
    },
    {
      src: "/images/achievement-moment.jpg",
      title: "Khoảnh Khắc Vinh Quang",
      description:
        "Thành quả của bao năm nỗ lực học tập cuối cùng cũng được ghi nhận. Đây là bước đệm quan trọng cho hành trình mới phía trước.",
      date: "15/12/2024",
      location: "Hội trường chính",
    },
  ]

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background Layers */}
      <div className="fixed inset-0">
        {/* Primary Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/sptphcm1-16901105564401079438420_2911085949.jpg')",
          }}
        ></div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/60"></div>

        {/* Secondary overlay image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/images/flowers-overlay.jpg')",
            mixBlendMode: "multiply",
          }}
        ></div>
      </div>

      {/* Enhanced Parallax Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes */}
        <div
          className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-pink-300/20 to-rose-300/20 rounded-full blur-xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)` }}
        ></div>
        <div
          className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-r from-rose-300/25 to-pink-300/25 rounded-full blur-xl animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.15}px) rotate(${scrollY * -0.03}deg)` }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-28 h-28 bg-gradient-to-r from-purple-300/15 to-pink-300/15 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.02}deg)` }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.1}px) rotate(${scrollY * -0.04}deg)` }}
        ></div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          >
            {i % 5 === 0 ? (
              <Heart className="w-4 h-4 text-pink-400/40" />
            ) : i % 5 === 1 ? (
              <Star className="w-3 h-3 text-rose-400/40" />
            ) : i % 5 === 2 ? (
              <Sparkles className="w-4 h-4 text-pink-500/35" />
            ) : i % 5 === 3 ? (
              <Flower2 className="w-3 h-3 text-rose-500/35" />
            ) : (
              <Crown className="w-3 h-3 text-purple-400/35" />
            )}
          </div>
        ))}
      </div>

      {/* Enhanced Mouse Follow Effect */}
      <div
        className="fixed w-80 h-80 rounded-full bg-gradient-to-r from-pink-300/8 to-rose-300/8 blur-3xl pointer-events-none transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x - 160,
          top: mousePosition.y - 160,
        }}
      ></div>

      {/* Enhanced Decorative Side Elements */}
      <div className="fixed left-0 top-1/4 w-3 h-32 bg-gradient-to-b from-pink-400/30 to-rose-400/30 rounded-r-2xl"></div>
      <div className="fixed right-0 top-1/3 w-3 h-40 bg-gradient-to-b from-rose-400/30 to-purple-400/30 rounded-l-2xl"></div>

      <div className="relative z-10">
        {/* Enhanced Hero Section */}
        <section
          id="hero"
          ref={(el) => (sectionRefs.current.hero = el)}
          className={`min-h-screen flex items-center justify-center px-6 transition-all duration-1000 relative ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-white/40"></div>
          <div className="text-center max-w-6xl mx-auto relative z-10">
            {/* Enhanced Profile Section */}
            <div className="relative inline-block mb-20 group">
              <div className="relative">
                {/* Outer Ring */}
                <div className="w-48 h-48 bg-gradient-to-br from-pink-200/60 to-rose-200/60 rounded-full p-2 group-hover:scale-105 transition-all duration-700">
                  {/* Inner Ring */}
                  <div className="w-full h-full bg-gradient-to-br from-white/90 to-pink-50/80 rounded-full p-3 border border-white/50">
                    {/* Image Container */}
                    <div className="w-full h-full bg-gradient-to-br from-pink-100/80 to-rose-100/70 rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/graduate-profile.jpg"
                        alt="Graduate"
                        className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-all duration-700"
                      />
                    </div>
                  </div>
                </div>

                {/* Enhanced Decorative Elements */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center animate-bounce">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div className="absolute top-1/4 -left-6 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center animate-ping">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <div className="absolute top-3/4 -right-6 w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center animate-pulse">
                  <Crown className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            {/* Enhanced Title Section */}
            <div className="mb-16 p-12 bg-white/40 backdrop-blur-xl rounded-3xl border border-white/50">
              <h1 className="text-7xl md:text-8xl font-bold mb-10 leading-tight">
                <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent">
                  Lễ Tốt Nghiệp
                </span>
              </h1>

              {/* Enhanced Decorative Line */}
              <div className="flex justify-center items-center mb-10 space-x-6">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-pink-500 to-rose-500 rounded-full"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center animate-pulse">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="w-32 h-1 bg-gradient-to-r from-rose-500 via-purple-500 to-transparent rounded-full"></div>
              </div>

              <p className="text-3xl md:text-4xl text-gray-700 font-light tracking-wide leading-relaxed">
                Một cột mốc quan trọng đáng được chia sẻ
              </p>
            </div>

            {/* Enhanced Scroll Indicator */}
            <div className="mt-20 animate-bounce">
              <div className="w-8 h-14 border-3 border-pink-500 rounded-full flex justify-center bg-white/30 backdrop-blur-sm">
                <div className="w-2 h-4 bg-gradient-to-b from-pink-500 to-rose-500 rounded-full mt-3 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Photo Gallery Section */}
        <section
          id="gallery"
          ref={(el) => (sectionRefs.current.gallery = el)}
          className={`py-20 px-6 transition-all duration-1000 ${
            isVisible("gallery") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 p-8 bg-white/30 backdrop-blur-xl rounded-3xl border border-white/50">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Kỷ Niệm Đẹp
              </h2>
              <div className="flex justify-center mb-6">
                <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
              </div>
              <p className="text-xl text-gray-600">Click vào ảnh để xem chi tiết và cảm nhận trọn vẹn khoảnh khắc</p>
            </div>

            {/* Enhanced Photo Grid - Reduced Height */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {photos.map((photo, i) => (
                <div
                  key={i}
                  className={`group relative transition-all duration-700 cursor-pointer ${
                    isVisible("gallery") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                  onClick={() => openPhotoModal(i)}
                >
                  <div className="relative bg-white/50 backdrop-blur-xl p-4 rounded-2xl border border-white/60 overflow-hidden group-hover:scale-105 group-hover:bg-white/70 transition-all duration-500">
                    {/* Enhanced Image Container - Reduced Height */}
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={photo.src || "/placeholder.svg"}
                        alt={photo.title}
                        className="w-full h-40 object-cover transition-all duration-500 group-hover:scale-110"
                      />

                      {/* Enhanced Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                        <div className="flex items-center space-x-2 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                          <Camera className="w-4 h-4" />
                          <span className="font-semibold text-sm">Xem chi tiết</span>
                          <Sparkles className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Corner Decoration */}
                      <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-to-r from-pink-500/80 to-rose-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Star className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    {/* Enhanced Photo Info */}
                    <div className="mt-3 text-center">
                      <h3 className="text-base font-bold text-gray-800 mb-1">{photo.title}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{photo.description.substring(0, 50)}...</p>
                      <div className="mt-2 flex justify-center">
                        <div className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full text-xs text-gray-700 font-medium">
                          {photo.date}
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Decorative Elements */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                      <Camera className="w-3 h-3 text-white" />
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
          ref={(el) => (sectionRefs.current["main-info"] = el)}
          className={`py-20 px-6 transition-all duration-1200 delay-200 ${
            isVisible("main-info") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <Card className="mb-24 border-0 bg-white/40 backdrop-blur-xl overflow-hidden border border-white/60">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/40 to-purple-50/30"></div>
              <CardContent className="relative p-16 md:p-24">
                {/* Enhanced Header */}
                <div className="text-center mb-20">
                  <div className="flex justify-center mb-12">
                    <div className="flex items-center space-x-8">
                      <Flower2 className="w-12 h-12 text-pink-500 animate-pulse" />
                      <div className="w-64 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
                      <Heart className="w-12 h-12 text-rose-500 animate-pulse" />
                      <div className="w-64 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
                      <Crown className="w-12 h-12 text-purple-500 animate-pulse" />
                    </div>
                  </div>

                  {/* Enhanced Title Section */}
                  <div className="relative mb-12">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-100/40 to-purple-100/40 rounded-3xl blur-2xl"></div>

                    <div className="relative p-12 bg-white/50 backdrop-blur-xl rounded-3xl border border-white/60">
                      <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 tracking-wide">Thư Mời Dự Lễ</h2>

                      <div className="flex justify-center items-center space-x-6 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                          <Star className="w-5 h-5 text-white" />
                        </div>
                        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></div>
                        <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full flex items-center justify-center">
                          <Crown className="w-5 h-5 text-white" />
                        </div>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <Award className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                        Chia sẻ niềm vui cùng gia đình và bạn bè trong ngày đặc biệt
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Graduate Name Section */}
                <div className="text-center mb-24">
                  <div className="p-16 md:p-20 bg-gradient-to-br from-white/60 to-pink-50/50 backdrop-blur-xl rounded-3xl border border-white/70">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-8">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent mb-4 tracking-wide">
                        Trần Thị Thu
                      </h3>
                      <p className="text-3xl md:text-4xl text-gray-800 font-light mb-2">
                        Cử nhân Sư phạm giáo dục tiểu học
                      </p>
                      <p className="text-2xl text-gray-700 font-light mb-8">Đại học Sư phạm Thành phố Hồ Chí Minh</p>

                      <div className="p-6 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl border border-pink-200/50 mb-6">
                        <p className="text-3xl text-pink-700 font-bold">Thân mời bạn tham dự</p>
                      </div>

                      <div className="flex justify-center">
                        <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Event Details Grid */}
                <div className="grid md:grid-cols-3 gap-10 mb-20">
                  {[
                    {
                      icon: Calendar,
                      title: "Ngày",
                      value: "15 tháng 7, 2025",
                      color: "from-pink-500 to-rose-500",
                      bgColor: "from-pink-50/60 to-rose-50/40",
                    },
                    {
                      icon: Clock,
                      title: "Thời gian",
                      value: "8:00 AM",
                      color: "from-rose-500 to-purple-500",
                      bgColor: "from-rose-50/60 to-purple-50/40",
                    },
                    {
                      icon: MapPin,
                      title: "Địa điểm",
                      value: "Hội trường B",
                      color: "from-purple-500 to-pink-500",
                      bgColor: "from-purple-50/60 to-pink-50/40",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`group relative transition-all duration-700 ${
                        isVisible("main-info") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div
                        className={`relative flex flex-col items-center text-center p-10 bg-gradient-to-br ${item.bgColor} backdrop-blur-xl rounded-3xl border border-white/60 hover:scale-105 transition-all duration-500`}
                      >
                        <div
                          className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                        >
                          <item.icon className="w-10 h-10 text-white" />
                        </div>
                        <p className="font-bold text-gray-800 text-2xl mb-3 group-hover:text-gray-900 transition-colors duration-300">
                          {item.title}
                        </p>
                        <p className="text-gray-700 text-xl leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                          {item.value.split("\n").map((line, idx) => (
                            <span key={idx}>
                              {line}
                              {idx !== item.value.split("\n").length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Enhanced Special Highlight Section */}
        <section
          id="highlight"
          ref={(el) => (sectionRefs.current.highlight = el)}
          className={`py-20 px-6 transition-all duration-1000 delay-200 ${
            isVisible("highlight") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 via-purple-200/40 to-rose-200/30 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300/20 to-purple-300/20"></div>

              <div className="relative p-16 md:p-20 bg-white/50 backdrop-blur-xl rounded-3xl border border-white/60">
                <div className="text-center relative z-10">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl mb-10 animate-bounce">
                    <GraduationCap className="w-12 h-12 text-white" />
                  </div>

                  <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent mb-8 tracking-wide">
                    🎓 Lễ Tốt Nghiệp Đặc Biệt 🎓
                  </h2>

                  <div className="flex justify-center items-center space-x-8 mb-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center animate-pulse">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-32 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-purple-500 rounded-2xl flex items-center justify-center animate-pulse">
                      <Crown className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center animate-pulse">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="max-w-4xl mx-auto">
                    <p className="text-3xl md:text-4xl text-gray-700 font-semibold mb-8 leading-relaxed">
                      "Một cột mốc quan trọng trong cuộc đời"
                    </p>
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10">
                      Sau bao năm tháng miệt mài học tập, đây là khoảnh khắc thiêng liêng để cùng nhau đánh dấu thành
                      công và chia sẻ niềm vui với những người thân yêu.
                    </p>

                    <div className="inline-flex items-center space-x-6 px-12 py-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-bold text-xl hover:scale-105 transition-all duration-500">
                      <Heart className="w-8 h-8 animate-pulse" />
                      <span>Rất mong được gặp mọi người!</span>
                      <Sparkles className="w-8 h-8 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Enhanced Floating Elements */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-r from-pink-400/60 to-rose-400/60 rounded-full animate-float"></div>
                <div
                  className="absolute top-12 right-12 w-8 h-8 bg-gradient-to-r from-rose-400/60 to-purple-400/60 rounded-full animate-float"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute bottom-8 left-12 w-6 h-6 bg-gradient-to-r from-purple-500/50 to-pink-500/50 rounded-full animate-float"
                  style={{ animationDelay: "2s" }}
                ></div>
                <div
                  className="absolute bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-pink-500/40 to-purple-500/40 rounded-full animate-float"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Invitation Messages Section */}
        <section
          id="invitation"
          ref={(el) => (sectionRefs.current.invitation = el)}
          className={`py-20 px-6 transition-all duration-1000 delay-300 ${
            isVisible("invitation") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 bg-white/40 backdrop-blur-xl overflow-hidden border border-white/50">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-purple-50/40"></div>
              <CardContent className="relative p-12 md:p-16">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl mb-6">
                    <Quote className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Lời mời chân thành</h3>
                  <div className="flex justify-center">
                    <div className="w-40 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-12">
                  {[
                    {
                      icon: Flower2,
                      title: "Đến những người thân yêu",
                      content:
                        "Sau bao năm tháng miệt mài học tập, hôm nay là ngày em được nhận tấm bằng tốt nghiệp. Thành công này không thể thiếu sự động viên, ủng hộ của gia đình và bạn bè. Em chân thành mời mọi người đến chung vui trong ngày đặc biệt này.",
                      color: "from-pink-500 to-rose-500",
                      bgColor: "from-white/60 to-pink-50/60",
                    },
                    {
                      icon: Heart,
                      title: "Chia sẻ niềm vui",
                      content:
                        "Niềm vui sẽ nhân đôi khi được chia sẻ cùng những người em yêu thương. Sự hiện diện của mọi người sẽ là món quà ý nghĩa nhất mà em có thể nhận được trong ngày tốt nghiệp này. Hãy đến và cùng em tạo nên những kỷ niệm đẹp nhé!",
                      color: "from-rose-500 to-purple-500",
                      bgColor: "from-rose-50/60 to-purple-50/60",
                    },
                    {
                      icon: Gift,
                      title: "Lời cảm ơn",
                      content:
                        "Em xin gửi lời cảm ơn sâu sắc đến tất cả mọi người đã luôn bên cạnh, động viên em trong suốt quá trình học tập. Mong rằng mọi người sẽ dành thời gian đến dự lễ tốt nghiệp để cùng em đánh dấu cột mốc quan trọng này.",
                      color: "from-purple-500 to-pink-500",
                      bgColor: "from-purple-50/60 to-pink-50/60",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`text-center p-10 bg-gradient-to-r ${item.bgColor} backdrop-blur-xl rounded-2xl border border-white/50 transition-all duration-700 hover:scale-105 ${
                        isVisible("invitation") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                      >
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h4>
                      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">{item.content}</p>
                    </div>
                  ))}
                </div>

                {/* Enhanced Contact Information */}
                <div className="mt-16 text-center p-10 bg-gradient-to-r from-white/70 to-pink-50/70 backdrop-blur-xl rounded-2xl border border-white/50">
                  <h4 className="text-2xl font-bold text-gray-800 mb-8">Thông tin liên hệ</h4>
                  <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
                    <div className="flex items-center space-x-4 text-gray-700">
                      <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center">
                        <Phone className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-gray-600 font-medium">Điện thoại</p>
                        <p className="text-xl font-bold">0123 456 789</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-700">
                      <div className="w-14 h-14 bg-gradient-to-r from-rose-500 to-purple-500 rounded-2xl flex items-center justify-center">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-gray-600 font-medium">Email</p>
                        <p className="text-xl font-bold">thu@email.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 p-6 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl border border-pink-200/50">
                    <p className="text-xl font-semibold text-pink-700 flex items-center justify-center space-x-3">
                      <Heart className="w-6 h-6" />
                      <span>Rất mong được gặp mọi người!</span>
                      <Sparkles className="w-6 h-6" />
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Google Maps Directions Section */}
        <section
          id="directions"
          ref={(el) => (sectionRefs.current.directions = el)}
          className={`py-20 px-6 transition-all duration-1000 delay-400 ${
            isVisible("directions") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl mb-6">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Hướng Dẫn Đi Đường</h2>
              <div className="flex justify-center mb-6">
                <div className="w-40 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Đại học Sư phạm Thành phố Hồ Chí Minh
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Map Container */}
              <div className="relative">
                <div className="bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60 overflow-hidden">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <MapPin className="w-6 h-6 text-pink-500 mr-3" />
                      Bản đồ chỉ đường
                    </h3>
                    
                    {/* Google Maps Embed */}
                    <div className="relative w-full h-96 rounded-2xl overflow-hidden border border-white/50">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.424184!2d106.6912!3d10.7622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1b7c3ed289%3A0xa06651894598e488!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTw6BpIEfDsm4!5e0!3m2!1svi!2svn!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-2xl"
                      ></iframe>
                      
                      {/* Map Overlay Info */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-white/50">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-semibold text-gray-800">Đại học Sư phạm TP.HCM</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href="https://maps.google.com/maps?q=Đại+học+Sư+phạm+Thành+phố+Hồ+Chí+Minh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full hover:scale-105 transition-all duration-300"
                      >
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">Mở Google Maps</span>
                      </a>
                      <a
                        href="https://maps.google.com/maps?daddr=Đại+học+Sư+phạm+Thành+phố+Hồ+Chí+Minh&dirflg=d"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-purple-500 text-white rounded-full hover:scale-105 transition-all duration-300"
                      >
                        <Navigation className="w-4 h-4" />
                        <span className="text-sm font-medium">Chỉ đường</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Directions Information */}
              <div className="space-y-6">

                {/* Venue Details */}
                <div className="bg-gradient-to-br from-pink-50/60 to-purple-50/60 backdrop-blur-xl rounded-3xl border border-white/60 p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                    <Building className="w-6 h-6 text-pink-500 mr-3" />
                    Thông tin địa điểm
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 p-4 bg-white/40 rounded-2xl border border-white/50">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-lg">Địa chỉ</p>
                        <p className="text-gray-700">280 An Dương Vương, Phường 4, Quận 5, TP.HCM</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-white/40 rounded-2xl border border-white/50">
                      <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-lg">Thời gian mở cửa</p>
                        <p className="text-gray-700">7:00 AM - 10:00 PM (Ngày lễ tốt nghiệp)</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-white/40 rounded-2xl border border-white/50">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-lg">Liên hệ</p>
                        <p className="text-gray-700">028 3835 2020 (Phòng Hành chính)</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-white/40 rounded-2xl border border-white/50">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Car className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-lg">Bãi đậu xe</p>
                        <p className="text-gray-700">Có bãi đậu xe miễn phí trong khuôn viên trường</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Tips */}
            <div className="mt-16 text-center">
              <div className="bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-yellow-500 mr-3" />
                  Lưu ý quan trọng
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-pink-50/60 to-rose-50/40 rounded-2xl border border-pink-200/50">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Đến sớm</p>
                      <p className="text-gray-700">Nên đến trước 30 phút để ổn định chỗ ngồi</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50/60 to-emerald-50/40 rounded-2xl border border-green-200/50">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">An toàn</p>
                      <p className="text-gray-700">Tuân thủ quy định an toàn của trường</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50/60 to-pink-50/40 rounded-2xl border border-purple-200/50">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Chụp ảnh</p>
                      <p className="text-gray-700">Có thể chụp ảnh trong khu vực được phép</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <section
          id="footer"
          ref={(el) => (sectionRefs.current.footer = el)}
          className={`py-16 px-6 transition-all duration-1000 delay-400 ${
            isVisible("footer") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center max-w-4xl mx-auto">
            <div className="p-12 bg-white/40 backdrop-blur-xl rounded-3xl border border-white/50">
              <div className="flex justify-center mb-12">
                <div className="flex items-center space-x-6">
                  <Flower2 className="w-8 h-8 text-pink-500 animate-pulse" />
                  <div className="w-48 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
                  <Heart className="w-8 h-8 text-rose-500 animate-pulse" />
                  <div className="w-48 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
                  <Crown className="w-8 h-8 text-purple-500 animate-pulse" />
                </div>
              </div>

              <p className="text-2xl text-gray-700 font-light tracking-wide mb-8">Với tình cảm và sự biết ơn sâu sắc</p>

              <div className="flex justify-center space-x-3 mb-8">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i % 3 === 0 ? "bg-pink-500/70" : i % 3 === 1 ? "bg-rose-500/70" : "bg-purple-500/70"
                    } animate-pulse`}
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>

              <div className="text-gray-600 text-lg leading-relaxed">
                © 2025 - Thiệp mời tốt nghiệp được thiết kế với tình yêu
                <br />
                <span className="text-pink-600 font-semibold">Thu</span> dành cho mọi người
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Enhanced Photo Modal */}
      <PhotoModal
        isOpen={isPhotoModalOpen}
        currentIndex={currentPhotoIndex}
        photos={photos}
        onClose={closePhotoModal}
        onNext={nextPhoto}
        onPrev={prevPhoto}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
