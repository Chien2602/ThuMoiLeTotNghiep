"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface PhotoModalProps {
  isOpen: boolean;
  currentIndex: number;
  photos: any[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const PhotoModal = ({
  isOpen,
  currentIndex,
  photos,
  onClose,
  onNext,
  onPrev,
}: PhotoModalProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageScale, setImageScale] = useState(1);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setImageScale(0.9);
      const timer = setTimeout(() => {
        setIsLoading(false);
        setImageScale(1);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen, currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
      {/* Enhanced backdrop with animated gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/50 to-pink-900/60 backdrop-blur-md transition-all duration-1000 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      >
        {/* Enhanced animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pink-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-yellow-400/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 right-1/4 w-0.5 h-0.5 bg-white/50 rounded-full animate-ping delay-500"></div>
          <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-pink-300/40 rounded-full animate-bounce delay-700"></div>
        </div>
        
        {/* Floating sparkles effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white/60 rounded-full animate-ping delay-300"></div>
          <div className="absolute top-2/3 right-1/4 w-0.5 h-0.5 bg-cyan-300/70 rounded-full animate-pulse delay-1200"></div>
          <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-purple-300/50 rounded-full animate-bounce delay-800"></div>
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
          className="hidden sm:flex absolute left-1 sm:left-2 md:-left-16 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-pink-500/30 to-purple-500/30 backdrop-blur-md border border-white/40 hover:from-pink-500/50 hover:to-purple-500/50 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25 hover:border-pink-300/60"
          size="sm"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white drop-shadow-lg" />
        </Button>
        <Button
          onClick={onNext}
          className="hidden sm:flex absolute right-1 sm:right-2 md:-right-16 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-md border border-white/40 hover:from-cyan-500/50 hover:to-blue-500/50 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25 hover:border-cyan-300/60"
          size="sm"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white drop-shadow-lg" />
        </Button>

        {/* Enhanced modal container with better gradients and effects */}
        <div className="bg-gradient-to-br from-white/20 via-purple-500/15 to-pink-500/20 backdrop-blur-3xl rounded-xl sm:rounded-2xl border border-white/40 overflow-hidden shadow-2xl shadow-purple-500/20 relative">
          {/* Subtle border glow effect */}
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 opacity-50 blur-xl"></div>
          
          {/* Enhanced close button */}
          <Button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-40 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-red-500/40 to-pink-500/40 backdrop-blur-md border border-white/40 hover:from-red-500/60 hover:to-pink-500/60 text-white transition-all duration-500 hover:scale-110 hover:rotate-90 hover:shadow-lg hover:shadow-red-500/25 hover:border-red-300/60"
            size="sm"
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 drop-shadow-lg" />
          </Button>

          <div className="flex flex-col lg:grid lg:grid-cols-3 min-h-[40vh] sm:min-h-[50vh] w-full rounded-xl sm:rounded-2xl relative">
            {/* Enhanced image section */}
            <div className="lg:col-span-2 relative bg-gradient-to-br from-black/30 via-purple-900/20 to-pink-900/30 flex items-center justify-center p-2 sm:p-3 md:p-6 min-h-[30vh] sm:min-h-[35vh] lg:min-h-[50vh] rounded-xl sm:rounded-2xl overflow-hidden">
              {/* Enhanced animated background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse delay-1000"></div>
              </div>
              
              {/* Floating elements in image section */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-ping delay-500"></div>
                <div className="absolute bottom-1/3 left-1/4 w-0.5 h-0.5 bg-pink-300/40 rounded-full animate-pulse delay-800"></div>
              </div>
              
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl">
                  <div className="relative">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-4 border-pink-400/60 border-t-pink-500 rounded-full animate-spin shadow-lg shadow-pink-500/30"></div>
                    <div className="absolute inset-1 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 border-4 border-purple-400/60 border-t-purple-500 rounded-full animate-spin animate-reverse shadow-lg shadow-purple-500/30"></div>
                    <div className="absolute inset-2 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 border-4 border-cyan-400/60 border-t-cyan-500 rounded-full animate-spin delay-500 shadow-lg shadow-cyan-500/30"></div>
                  </div>
                </div>
              )}
              
              <img
                src={
                  photos[currentIndex]?.src ||
                  "/images/sptphcm.jpg?height=600&width=400"
                }
                alt={photos[currentIndex]?.title}
                className={`w-full h-[30vh] sm:h-[40vh] md:h-[50vh] object-cover rounded-lg sm:rounded-xl transition-all duration-1000 shadow-2xl shadow-black/30 hover:shadow-3xl hover:shadow-purple-500/20 ${
                  isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
                style={{ transform: `scale(${imageScale})` }}
                onLoad={() => setIsLoading(false)}
              />

              {/* Enhanced photo counter with glow */}
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-6 md:left-6 bg-gradient-to-r from-pink-500/90 to-purple-500/90 backdrop-blur-md rounded-full px-2 py-1 sm:px-3 sm:py-2 text-white font-bold border border-white/40 shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 transition-all duration-300 hover:scale-105">
                <span className="text-xs sm:text-sm drop-shadow-lg">{currentIndex + 1}</span>
                <span className="mx-1 opacity-70">/</span>
                <span className="text-xs sm:text-sm opacity-90 drop-shadow-lg">{photos.length}</span>
              </div>

              {/* Enhanced mobile navigation buttons */}
              <div className="sm:hidden absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-3">
                <Button
                  onClick={onPrev}
                  className="w-9 h-9 rounded-full bg-gradient-to-r from-pink-500/40 to-purple-500/40 backdrop-blur-md border border-white/40 hover:from-pink-500/60 hover:to-purple-500/60 transition-all duration-300 hover:scale-110 shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/35"
                  size="sm"
                >
                  <ChevronLeft className="w-4 h-4 text-white drop-shadow-lg" />
                </Button>
                <Button
                  onClick={onNext}
                  className="w-9 h-9 rounded-full bg-gradient-to-r from-cyan-500/40 to-blue-500/40 backdrop-blur-md border border-white/40 hover:from-cyan-500/60 hover:to-blue-500/60 transition-all duration-300 hover:scale-110 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/35"
                  size="sm"
                >
                  <ChevronRight className="w-4 h-4 text-white drop-shadow-lg" />
                </Button>
              </div>
            </div>

            {/* Enhanced content section */}
            <div className="bg-gradient-to-br from-white/30 via-purple-500/20 to-pink-500/25 backdrop-blur-2xl p-3 sm:p-4 md:p-6 flex flex-col border-t lg:border-t-0 lg:border-l border-white/30 max-h-[40vh] sm:max-h-[45vh] lg:max-h-none overflow-y-auto rounded-xl sm:rounded-2xl relative">
              {/* Subtle content glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl sm:rounded-2xl opacity-50"></div>
              
              <div className="mb-3 sm:mb-4 relative z-10">
                {/* Enhanced camera icon with glow */}
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg sm:rounded-xl mb-3 sm:mb-4 shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 transition-all duration-300 hover:scale-105 hover:rotate-3">
                  <Camera className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white drop-shadow-lg" />
                </div>
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 leading-tight drop-shadow-lg hover:drop-shadow-xl transition-all duration-300">
                  {photos[currentIndex]?.title}
                </h2>
                <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full shadow-lg shadow-pink-400/50 hover:shadow-xl hover:shadow-pink-400/60 transition-all duration-300"></div>
              </div>

              <div className="flex-1 mb-3 sm:mb-4 relative z-10">
                <p className="text-white/95 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm drop-shadow-sm hover:drop-shadow-md transition-all duration-300">
                  {photos[currentIndex]?.description}
                </p>

                <div className="space-y-2 sm:space-y-3">
                  {/* Enhanced date card */}
                  <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gradient-to-r from-white/25 to-purple-500/15 backdrop-blur-md rounded-xl border border-white/40 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02] hover:bg-gradient-to-r hover:from-white/30 hover:to-purple-500/20">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 transition-all duration-300 hover:scale-110">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white drop-shadow-lg" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-white/80 font-medium text-xs">
                        Ngày chụp
                      </p>
                      <p className="text-white font-semibold text-xs sm:text-sm truncate drop-shadow-sm">
                        {photos[currentIndex]?.date}
                      </p>
                    </div>
                  </div>
                  
                  {/* Enhanced location card */}
                  <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gradient-to-r from-white/25 to-pink-500/15 backdrop-blur-md rounded-xl border border-white/40 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 hover:scale-[1.02] hover:bg-gradient-to-r hover:from-white/30 hover:to-pink-500/20">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-110">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white drop-shadow-lg" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-white/80 font-medium text-xs">
                        Địa điểm
                      </p>
                      <p className="text-white font-semibold text-xs sm:text-sm truncate drop-shadow-sm">
                        {photos[currentIndex]?.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enhanced quote section */}
                <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-gradient-to-r from-white/25 via-purple-500/15 to-pink-500/15 backdrop-blur-md rounded-xl border border-white/40 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 hover:scale-[1.02] hover:bg-gradient-to-r hover:from-white/30 hover:via-purple-500/20 hover:to-pink-500/20">
                  <div className="flex items-start space-x-2">
                    <Quote className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-pink-300 flex-shrink-0 mt-0.5 sm:mt-1 drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 hover:scale-110" />
                    <p className="text-white/95 italic leading-relaxed text-xs sm:text-sm drop-shadow-sm hover:drop-shadow-md transition-all duration-300">
                      "Mỗi khoảnh khắc đều là một kỷ niệm đáng trân trọng trong
                      hành trình học tập của em."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const photos = [
    {
      src: "/images/room.jpg?height=600&width=400",
      title: "Lễ 30/4",
      description:
        "Thật may mắn khi đc trải qua cùng người tôi luôn tin tưởng trong khoảnh khắc thiêng liêng này. Người đã giúp Thu lớn lên như ngày hôm nay.",
      date: "30/04/2025",
      location: "KTX sư phạm TP.HCM",
    },
    {
      src: "/images/class.jpg?height=600&width=400",
      title: "Cùng lớp học",
      description:
        "Một trải nghiệm đầu đời với bao cảm xúc, bài học",
      date: "16/04/2024",
      location: "Trường Tiểu học Phú Định",
    },
    {
      src: "/images/friend.jpg?height=600&width=400",
      title: "Cùng tâm giao",
      description:
        "Thật buồn vì biết bạn quá trễ nhưng cảm ơn bạn đã làm cuộc sống đại học của tôi thêm phần rực rỡ. + 1 người tôi tin tưởng",
      date: "23/01/2025",
      location: "Kim Sơn, Ninh Bình",
    },
    {
      src: "/images/trai.jpg?height=600&width=400",
      title: "Kỉ niệm khó quên",
      description:
        "Sẽ mãi nhớ từng con người nơi đây, rất may mắn khi được gặp các bạn.",
      date: "31/12/2024",
      location: "KTX sư phạm TP.HCM",
    },
  ];

  useEffect(() => {
    setIsClient(true);
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(document.documentElement.scrollTop || document.body.scrollTop);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const isVisible = (sectionId: string) => visibleSections.has(sectionId);

  const openPhotoModal = (index: number) => {
    setCurrentPhotoIndex(index);
    setIsPhotoModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closePhotoModal = () => {
    setIsPhotoModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 rounded-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-2xl"
          style={{
            backgroundImage:
              "url('/images/sptphcm.jpg?height=1080&width=1920')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/90 via-purple-50/80 to-cyan-50/70 rounded-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-100/40 via-rose-100/30 to-cyan-100/20 rounded-2xl"></div>
      </div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none hidden sm:block rounded-2xl">
        <div
          className="absolute top-20 left-10 w-16 sm:w-24 h-16 sm:h-24 bg-pink-300/30 rounded-full blur-xl animate-pulse"
          style={{
            transform: `translateY(${scrollY * 0.1}px) rotate(${
              scrollY * 0.05
            }deg)`,
          }}
        ></div>
        <div
          className="absolute top-40 right-20 w-12 sm:w-20 h-12 sm:h-20 bg-cyan-300/35 rounded-full blur-xl animate-pulse"
          style={{
            transform: `translateY(${scrollY * -0.15}px) rotate(${
              scrollY * -0.03
            }deg)`,
          }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-20 sm:w-28 h-20 sm:h-28 bg-pink-400/25 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translateY(${scrollY * 0.2}px) rotate(${
              scrollY * 0.02
            }deg)`,
          }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-12 sm:w-16 h-12 sm:h-16 bg-cyan-400/30 rounded-full blur-2xl animate-pulse"
          style={{
            transform: `translateY(${scrollY * -0.1}px) rotate(${
              scrollY * -0.04
            }deg)`,
          }}
        ></div>
      </div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none rounded-2xl">
        {isClient &&
          [...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-50 sm:opacity-70 rounded-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${8 + Math.random() * 6}s`,
              }}
            >
              {i % 6 === 0 ? (
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400/60" />
              ) : i % 6 === 1 ? (
                <Star className="w-2 h-2 sm:w-3 sm:h-3 text-cyan-400/60" />
              ) : i % 6 === 2 ? (
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500/50" />
              ) : i % 6 === 3 ? (
                <Flower2 className="w-2 h-2 sm:w-3 sm:h-3 text-cyan-500/50" />
              ) : i % 6 === 4 ? (
                <Crown className="w-2 h-2 sm:w-3 sm:h-3 text-pink-400/50" />
              ) : (
                <Award className="w-2 h-2 sm:w-3 sm:h-3 text-cyan-400/50" />
              )}
            </div>
          ))}
      </div>

      <div
        className="fixed w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-pink-300/12 blur-3xl pointer-events-none transition-all duration-700 ease-out hidden sm:block"
        style={{
          left: mousePosition.x - 120,
          top: mousePosition.y - 120,
        }}
      ></div>

      <div className="fixed left-0 top-1/4 w-2 sm:w-3 h-24 sm:h-32 bg-pink-400/40 rounded-r-2xl hidden sm:block"></div>
      <div className="fixed right-0 top-1/3 w-2 sm:w-3 h-32 sm:h-40 bg-cyan-400/40 rounded-l-2xl hidden sm:block"></div>

      <div className="relative z-10">
        <section
          id="hero"
          ref={(el) => {
            sectionRefs.current.hero = el;
          }}
          className={`min-h-[80vh] flex items-center justify-center px-3 sm:px-6 transition-all duration-1000 relative rounded-2xl ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50/70 via-purple-50/60 to-cyan-50/50 rounded-2xl"></div>
          <div className="text-center max-w-6xl mx-auto relative z-10 rounded-2xl">
            <div className="relative inline-block mb-8 sm:mb-12 group">
              <div className="relative">
                <div className="w-32 h-32 sm:w-48 sm:h-48 bg-pink-200/80 rounded-full p-1.5 sm:p-2 group-hover:scale-105 transition-all duration-700 shadow-2xl">
                  <div className="w-full h-full bg-white/95 rounded-full p-2 sm:p-3 border border-white/60">
                    <div className="w-full h-full bg-pink-100/90 rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/me.jpg?height=200&width=200"
                        alt="Graduate"
                        className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-all duration-700"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 md:-top-3 md:-right-3 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-pink-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                  <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-white" />
                </div>
                <div className="absolute -bottom-1.5 -left-1.5 sm:-bottom-2 sm:-left-2 md:-bottom-3 md:-left-3 w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 bg-cyan-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                  <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-5 md:h-5 text-white" />
                </div>
                <div className="absolute top-1/4 -left-3 sm:-left-4 md:-left-6 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-pink-400 rounded-full flex items-center justify-center animate-ping shadow-lg">
                  <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:w-4 text-white" />
                </div>
                <div className="absolute top-3/4 -right-3 sm:-right-4 md:-right-6 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-cyan-400 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                  <Crown className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white" />
                </div>
              </div>
            </div>

            <div className="mb-8 sm:mb-12 p-4 sm:p-8 rounded-2xl sm:rounded-3xl">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 sm:mb-10 leading-tight text-pink-600">
                Lễ Tốt Nghiệp
              </h1>
              <div className="flex justify-center items-center mb-6 sm:mb-10 space-x-3 sm:space-x-6">
                <div className="w-16 sm:w-32 h-1 bg-pink-500 rounded-full"></div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-pink-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-white" />
                </div>
                <div className="w-16 sm:w-32 h-1 bg-cyan-500 rounded-full"></div>
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-light tracking-wide leading-relaxed">
                Dấu mốc quan trọng khép lại những năm tháng tuổi trẻ đầy nhiệt huyết, để bắt đầu hành trình mới với bao ước mơ và thử thách 
              </p>
            </div>
            <div className="mt-12 sm:mt-20 animate-bounce">
              <div className="w-6 h-10 sm:w-8 sm:h-14 border-2 sm:border-3 border-pink-500 rounded-full flex justify-center bg-white/40 backdrop-blur-sm shadow-lg">
                <div className="w-1.5 h-3 sm:w-2 sm:h-4 bg-pink-500 rounded-full mt-2 sm:mt-3 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="gallery"
          ref={(el) => {
            sectionRefs.current.gallery = el;
          }}
          className={`py-8 sm:py-12 px-3 sm:px-6 transition-all duration-1000 rounded-2xl ${
            isVisible("gallery")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 p-6 sm:p-8 bg-white/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/60 shadow-xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-4 sm:mb-6">
                Kỷ Niệm Đẹp
              </h2>
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-24 sm:w-32 h-1 bg-pink-500 rounded-full"></div>
              </div>
              <p className="text-lg sm:text-xl text-gray-600">
                Một phần thanh xuân của tôi
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {photos.map((photo, i) => (
                <div
                  key={i}
                  className={`group relative transition-all duration-700 cursor-pointer ${
                    isVisible("gallery")
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                  onClick={() => openPhotoModal(i)}
                >
                  <div className="relative bg-white/60 backdrop-blur-xl p-2 sm:p-4 rounded-xl sm:rounded-2xl border border-white/70 overflow-hidden group-hover:scale-105 group-hover:shadow-2xl transition-all duration-500">
                    <div className="relative overflow-hidden rounded-lg sm:rounded-xl">
                      <img
                        src={
                          photo.src || "/placeholder.svg?height=200&width=300"
                        }
                        alt={photo.title}
                        className="w-full h-24 sm:h-40 object-cover transition-all duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-pink-900/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-2 sm:pb-4">
                        <div className="flex items-center space-x-1 sm:space-x-2 text-white transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                          <Camera className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="font-semibold text-xs sm:text-sm">
                            Xem chi tiết
                          </span>
                          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                        </div>
                      </div>

                      <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-4 h-4 sm:w-6 sm:h-6 bg-pink-500/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                        <Star className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-3 text-center">
                      <h3 className="text-xs sm:text-base font-bold text-gray-800 mb-1">
                        {photo.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed hidden sm:block">
                        {photo.description.substring(0, 50)}...
                      </p>
                      <div className="mt-1 sm:mt-2 flex justify-center">
                        <div className="px-2 py-1 sm:px-3 sm:py-1 bg-pink-500/20 rounded-full text-xs text-gray-700 font-medium">
                          {photo.date}
                        </div>
                      </div>
                    </div>

                    <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-4 h-4 sm:w-6 sm:h-6 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <Camera className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Information Section */}
        <section
          id="main-info"
          ref={(el) => {
            sectionRefs.current["main-info"] = el;
          }}
          className={`py-8 sm:py-12 px-3 sm:px-6 transition-all duration-1200 delay-200 rounded-2xl ${
            isVisible("main-info")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div className="max-w-7xl mx-auto rounded-3xl">
            <Card className="mb-16 sm:mb-24bg-white/50 backdrop-blur-xl overflow-hidden border border-white/70 shadow-2xl rounded-2xl">
              <div className="absolute inset-0 bg-pink-50/30 rounded-2xl"></div>
              <CardContent className="relative p-8 sm:p-16 md:p-24">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-20">
                  <div className="flex justify-center mb-8 sm:mb-12">
                    <div className="flex items-center space-x-4 sm:space-x-8">
                      <Flower2 className="w-8 h-8 sm:w-12 sm:h-12 text-pink-500 animate-pulse" />
                      <div className="w-32 sm:w-64 h-1 bg-pink-500 rounded-full"></div>
                      <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-cyan-500 animate-pulse" />
                      <div className="w-32 sm:w-64 h-1 bg-cyan-500 rounded-full hidden sm:block"></div>
                      <Crown className="w-8 h-8 sm:w-12 sm:h-12 text-pink-500 animate-pulse hidden sm:block" />
                    </div>
                  </div>

                  {/* Title Section */}
                  <div className="relative mb-8 sm:mb-12">
                    <div className="absolute inset-0 bg-pink-100/50 rounded-2xl sm:rounded-3xl blur-2xl"></div>
                    <div className="relative p-6 sm:p-12 bg-white/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/70 shadow-xl">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 tracking-wide">
                        Thư Mời Dự Lễ
                      </h2>
                      <div className="flex justify-center items-center space-x-3 sm:space-x-6 mb-4 sm:mb-6">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
                          <Star className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div className="w-16 sm:w-24 h-1 bg-pink-500 rounded-full"></div>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                          <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div className="w-16 sm:w-24 h-1 bg-cyan-500 rounded-full"></div>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
                          <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                      </div>
                      <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                        Thân gửi những người tôi yêu
                      </p>
                    </div>
                  </div>
                </div>

                {/* Graduate Name Section */}
                <div className="text-center mb-16 sm:mb-24">
                  <div className="p-8 sm:p-16 md:p-20 bg-white/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/80 shadow-xl">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 shadow-lg">
                        <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-3 sm:mb-4 tracking-wide">
                        Trần Thị Thu
                      </h3>
                      <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 font-light mb-2">
                        Cử nhân Sư phạm giáo dục tiểu học
                      </p>
                      <p className="text-lg sm:text-xl text-gray-700 font-light mb-6 sm:mb-8">
                        Đại học Sư phạm Thành phố Hồ Chí Minh
                      </p>
                      <div className="p-4 sm:p-6 bg-pink-500/15 rounded-xl sm:rounded-2xl border border-pink-200/60 mb-4 sm:mb-6 shadow-lg">
                        <p className="text-xl sm:text-2xl text-pink-700 font-bold">
                          Thân mời bạn tham dự
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-24 sm:w-32 h-1 bg-pink-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 mb-12 sm:mb-20">
                  {[
                    {
                      icon: Calendar,
                      title: "Ngày",
                      value: "15 tháng 7, 2025",
                      color: "bg-pink-500",
                      bgColor: "bg-pink-50/70",
                    },
                    {
                      icon: Clock,
                      title: "Thời gian",
                      value: "10:30 AM",
                      color: "bg-cyan-500",
                      bgColor: "bg-cyan-50/70",
                    },
                    {
                      icon: MapPin,
                      title: "Địa điểm",
                      value: "Hội trường B",
                      color: "bg-pink-500",
                      bgColor: "bg-pink-50/70",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`group relative transition-all duration-700 ${
                        isVisible("main-info")
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div
                        className={`relative flex flex-col items-center text-center p-6 sm:p-10 ${item.bgColor} backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/70 hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl`}
                      >
                        <div
                          className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 ${item.color} rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                        >
                          <item.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                        </div>
                        <p className="font-bold text-gray-800 text-xl sm:text-2xl mb-2 sm:mb-3 group-hover:text-gray-900 transition-colors duration-300">
                          {item.title}
                        </p>
                        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                          {item.value.split("\n").map((line, idx) => (
                            <span key={idx}>
                              {line}
                              {idx !== item.value.split("\n").length - 1 && (
                                <br />
                              )}
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

        {/* Special Highlight Section */}
        <section
          id="highlight"
          ref={(el) => {
            sectionRefs.current.highlight = el;
          }}
          className={`py-8 sm:py-12 px-3 sm:px-6 transition-all duration-1000 delay-200 rounded-2xl ${
            isVisible("highlight")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-pink-200/40 animate-pulse rounded-2xl"></div>
              <div className="absolute inset-0 bg-cyan-300/30 rounded-2xl"></div>
              <div className="relative p-8 sm:p-16 md:p-20 bg-white/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/70 shadow-2xl">
                <div className="text-center relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 bg-pink-500 rounded-2xl sm:rounded-3xl mb-6 sm:mb-10 animate-bounce shadow-xl">
                    <GraduationCap className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-6 sm:mb-8 tracking-wide">
                    🎓 Lễ Tốt Nghiệp Đặc Biệt 🎓
                  </h2>
                  <div className="flex justify-center items-center space-x-4 sm:space-x-8 mb-6 sm:mb-10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center animate-pulse shadow-lg">
                      <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="w-16 sm:w-32 h-1.5 sm:h-2 bg-pink-500 rounded-full"></div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center animate-pulse shadow-lg">
                      <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="w-16 sm:w-32 h-1.5 sm:h-2 bg-cyan-500 rounded-full hidden sm:block"></div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center animate-pulse hidden sm:block shadow-lg">
                      <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>
                  <div className="max-w-4xl mx-auto">
                    <p className="text-2xl sm:text-3xl md:text-4xl text-gray-700 font-semibold mb-6 sm:mb-8 leading-relaxed">
                      "Một cột mốc quan trọng trong cuộc đời"
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 sm:mb-10">
                      Sau bao năm tháng miệt mài học tập, đây là khoảnh khắc
                      thiêng liêng để cùng nhau đánh dấu thành công và chia sẻ
                      niềm vui với những người thân yêu.
                    </p>
                    <div className="inline-flex items-center space-x-2 sm:space-x-3 md:space-x-6 px-4 py-3 sm:px-6 sm:py-4 md:px-12 md:py-6 bg-pink-500 rounded-full text-white font-bold text-sm sm:text-lg md:text-xl hover:scale-105 transition-all duration-500 shadow-xl">
                      <Heart className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 animate-pulse" />
                      <span>Rất mong được gặp mọi người!</span>
                      <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-3 left-3 sm:top-6 sm:left-6 w-8 h-8 sm:w-12 sm:h-12 bg-pink-400/70 rounded-full animate-float shadow-lg"></div>
                <div
                  className="absolute top-6 right-6 sm:top-12 sm:right-12 w-6 h-6 sm:w-8 sm:h-8 bg-cyan-400/70 rounded-full animate-float shadow-lg"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute bottom-4 left-6 sm:bottom-8 sm:left-12 w-4 h-4 sm:w-6 sm:h-6 bg-pink-500/60 rounded-full animate-float shadow-lg"
                  style={{ animationDelay: "2s" }}
                ></div>
                <div
                  className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-14 sm:h-14 bg-cyan-500/50 rounded-full animate-float shadow-lg"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Invitation Messages Section */}
        <section
          id="invitation"
          ref={(el) => {
            sectionRefs.current.invitation = el;
          }}
          className={`py-8 sm:py-12 px-3 sm:px-6 transition-all duration-1000 delay-300 rounded-2xl ${
            isVisible("invitation")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 bg-white/50 backdrop-blur-xl overflow-hidden border border-white/60 shadow-2xl rounded-2xl">
              <div className="absolute inset-0 bg-pink-50/40 rounded-2xl"></div>
              <CardContent className="relative p-6 sm:p-12 md:p-16">
                <div className="text-center mb-12 sm:mb-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-pink-500 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-lg">
                    <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
                    Lời mời chân thành
                  </h3>
                  <div className="flex justify-center">
                    <div className="w-32 sm:w-40 h-1 bg-pink-500 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-8 sm:space-y-12">
                  {[
                    {
                      icon: Flower2,
                      title: "Đến những người thân yêu",
                      content:
                        "Buổi lễ tốt nghiệp này là dấu mốc quan trọng trong cuộc đời mình và niềm vui ấy sẽ trọn vẹn hơn nếu có sự hiện diện của bạn.Mình rất mong mọi người sẽ dành thời gian quý báu để đến dự lễ tốt nghiệp của mình , cùng mình chia sẻ khoảnh khắc đáng nhớ này.",
                      color: "bg-pink-500",
                      bgColor: "bg-white/70",
                    },
                    {
                      icon: Gift,
                      title: "Lời cảm ơn",
                      content:
                        "Mình xin gửi lời cảm ơn sâu sắc đến tất cả mọi người đã luôn bên cạnh, động viên mình trong suốt quá trình học tập. Mong rằng mọi người sẽ dành thời gian đến dự lễ tốt nghiệp để cùng mình đánh dấu cột mốc quan trọng này.",
                      color: "bg-pink-500",
                      bgColor: "bg-pink-50/70",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`text-center p-6 sm:p-10 ${
                        item.bgColor
                      } backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/60 transition-all duration-700 hover:scale-105 hover:shadow-xl ${
                        isVisible("invitation")
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 ${item.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg`}
                      >
                        <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                        {item.title}
                      </h4>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Contact Information */}
                <div className="mt-12 sm:mt-16 text-center p-6 sm:p-10 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/60 shadow-lg">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8">
                    Thông tin liên hệ
                  </h4>
                  <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12">
                    <div className="flex items-center space-x-3 sm:space-x-4 text-gray-700">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-pink-500 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-gray-600 font-medium">
                          Điện thoại
                        </p>
                        <p className="text-lg sm:text-xl font-bold">
                          0965187496
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4 text-gray-700">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                        <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-gray-600 font-medium">
                          Email
                        </p>
                        <p className="text-lg sm:text-xl font-bold">
                          thutran081002@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-pink-500/15 rounded-xl sm:rounded-2xl border border-pink-200/60 shadow-lg">
                    <p className="text-lg sm:text-xl font-semibold text-pink-700 flex items-center justify-center space-x-2 sm:space-x-3">
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span>Rất mong được gặp mọi người!</span>
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
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
          ref={(el) => {
            sectionRefs.current.directions = el;
          }}
          className={`py-8 sm:py-12 px-3 sm:px-6 transition-all duration-1000 delay-400 rounded-2xl ${
            isVisible("directions")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-pink-500 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-lg">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
                Hướng Dẫn Đi Đường
              </h2>
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-32 sm:w-40 h-1 bg-pink-500 rounded-full"></div>
              </div>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Đại học Sư phạm Thành phố Hồ Chí Minh
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Map Container */}
              <div className="relative order-2 lg:order-1">
                <div className="bg-white/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/70 overflow-hidden shadow-xl">
                  <div className="p-4 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 mr-2 sm:mr-3" />
                      Bản đồ chỉ đường
                    </h3>
                    {/* Google Maps Embed */}
                    <div className="relative w-full h-64 sm:h-96 rounded-xl sm:rounded-2xl overflow-hidden border border-white/60 shadow-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.424184!2d106.6912!3d10.7622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1b7c3ed289%3A0xa06651894598e488!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTw6BpIEfDsm4!5e0!3m2!1svi!2svn!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-xl sm:rounded-2xl"
                      ></iframe>
                      {/* Map Overlay Info */}
                      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 border border-white/60 shadow-lg">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-pink-500 rounded-full animate-pulse"></div>
                          <span className="text-xs sm:text-sm font-semibold text-gray-800">
                            Đại học Sư phạm TP.HCM
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Quick Actions */}
                    <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <a
                        href="https://maps.google.com/maps?q=Đại+học+Sư+phạm+Thành+phố+Hồ+Chí+Minh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 px-3 py-2 sm:px-4 sm:py-3 bg-pink-500 text-white rounded-full hover:scale-105 transition-all duration-300 text-xs sm:text-sm md:text-base font-medium shadow-lg"
                      >
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Mở Google Maps</span>
                      </a>
                      <a
                        href="https://maps.google.com/maps?daddr=Đại+học+Sư+phạm+Thành+phố+Hồ+Chí+Minh&dirflg=d"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 px-3 py-2 sm:px-4 sm:py-3 bg-cyan-500 text-white rounded-full hover:scale-105 transition-all duration-300 text-xs sm:text-sm md:text-base font-medium shadow-lg"
                      >
                        <Navigation className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Chỉ đường</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Directions Information */}
              <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                {/* Venue Details */}
                <div className="bg-pink-50/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/70 p-6 sm:p-8 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 flex items-center">
                    <Building className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 mr-2 sm:mr-3" />
                    Thông tin địa điểm
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/50 rounded-xl sm:rounded-2xl border border-white/60 shadow-sm">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-base sm:text-lg">
                          Địa chỉ
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base">
                          280 An Dương Vương, Phường 4, Quận 5, TP.HCM
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/50 rounded-xl sm:rounded-2xl border border-white/60 shadow-sm">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-base sm:text-lg">
                          Thời gian mở cửa
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base">
                          7:00 AM - 10:00 PM (Ngày lễ tốt nghiệp)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/50 rounded-xl sm:rounded-2xl border border-white/60 shadow-sm">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-base sm:text-lg">
                          Liên hệ
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base">
                          0965187496
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/50 rounded-xl sm:rounded-2xl border border-white/60 shadow-sm">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Car className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-base sm:text-lg">
                          Bãi đậu xe
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base">
                          Có bãi đậu xe miễn phí trong khuôn viên trường
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Tips */}
            <div className="mt-12 sm:mt-16 text-center">
              <div className="bg-white/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/70 p-6 sm:p-8 shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 mr-2 sm:mr-3" />
                  Lưu ý quan trọng
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left">
                  <div className="flex items-start space-x-3 sm:space-x-4 p-4 bg-pink-50/70 rounded-xl sm:rounded-2xl border border-pink-200/60 shadow-sm">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm sm:text-base">
                        Đến sớm
                      </p>
                      <p className="text-gray-700 text-xs sm:text-sm">
                        Nên đến trước 30 phút để ổn định chỗ ngồi
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4 p-4 bg-green-50/70 rounded-xl sm:rounded-2xl border border-green-200/60 shadow-sm">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm sm:text-base">
                        An toàn
                      </p>
                      <p className="text-gray-700 text-xs sm:text-sm">
                        Tuân thủ quy định an toàn của trường
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4 p-4 bg-cyan-50/70 rounded-xl sm:rounded-2xl border border-cyan-200/60 shadow-sm">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm sm:text-base">
                        Chụp ảnh
                      </p>
                      <p className="text-gray-700 text-xs sm:text-sm">
                        Có thể chụp ảnh trong khu vực được phép
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section
          id="footer"
          ref={(el) => {
            sectionRefs.current.footer = el;
          }}
          className={`py-8 sm:py-12 px-3 sm:px-6 transition-all duration-1000 delay-400 rounded-2xl ${
            isVisible("footer")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center max-w-4xl mx-auto">
            <div className="p-8 sm:p-12 bg-white/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/60 shadow-xl">
              <div className="flex justify-center mb-8 sm:mb-12">
                <div className="flex items-center space-x-3 sm:space-x-6">
                  <Flower2 className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 animate-pulse" />
                  <div className="w-24 sm:w-48 h-1 bg-pink-500 rounded-full"></div>
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-500 animate-pulse" />
                  <div className="w-24 sm:w-48 h-1 bg-cyan-500 rounded-full hidden sm:block"></div>
                  <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 animate-pulse hidden sm:block" />
                </div>
              </div>
              <p className="text-xl sm:text-2xl text-gray-700 font-light tracking-wide mb-6 sm:mb-8">
                Với tình cảm và sự biết ơn sâu sắc
              </p>
              <div className="flex justify-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                      i % 3 === 0
                        ? "bg-pink-500/80"
                        : i % 3 === 1
                        ? "bg-cyan-500/80"
                        : "bg-pink-400/80"
                    } animate-pulse shadow-sm`}
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
              <div className="text-gray-600 text-base sm:text-lg leading-relaxed">
                © 2025 - Thiệp mời tốt nghiệp được thiết kế với tình yêu
                <br />
                <span className="text-pink-600 font-semibold">Thu</span> dành
                cho mọi người
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Photo Modal */}
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
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
