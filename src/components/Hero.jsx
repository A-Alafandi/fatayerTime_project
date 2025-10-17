import { useState, useEffect, useCallback, memo } from "react"
import { FaPlay } from "react-icons/fa"

// Import hero image statically for better performance
import HeroImg from "../assets/img/fallback-food.webp"

// Separate VideoModal component for better code organization
const VideoModal = memo(({ isOpen, onClose, videoSrc }) => {
  // Handle escape key
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="video-overlay" role="dialog" aria-modal="true" aria-labelledby="video-title" onClick={onClose}>
      <div className="video-container" onClick={(e) => e.stopPropagation()}>
        <h2 id="video-title" className="sr-only">
          Fatayer Time Restaurant Video
        </h2>

        {videoSrc ? (
          <video
            controls
            autoPlay
            playsInline
            preload="metadata"
            poster={HeroImg}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "10px",
            }}
            onError={(e) => {
              console.error("Video failed to load:", e)
              // Optionally show fallback content
            }}
          >
            <source src={videoSrc} type="video/mp4" />
            <p>
              Your browser doesn't support HTML5 video.
              <a href={videoSrc} download>
                Download the video
              </a>{" "}
              instead.
            </p>
          </video>
        ) : (
          <div className="video-loading">Loading video...</div>
        )}

        <button type="button" className="close-btn" aria-label="Close video modal" onClick={onClose} autoFocus>
          ×
        </button>
      </div>
    </div>
  )
})

VideoModal.displayName = "VideoModal"

// Separate PlayButton component
const PlayButton = memo(({ onClick, disabled }) => (
  <button
    type="button"
    className={`pulsating-play-btn ${disabled ? "loading" : ""}`}
    onClick={onClick}
    disabled={disabled}
    aria-label="Play restaurant showcase video"
    aria-describedby="play-btn-description"
  >
    <FaPlay />
    <span id="play-btn-description" className="sr-only">
      Watch our restaurant showcase video to see our delicious Syrian cuisine
    </span>
  </button>
))

PlayButton.displayName = "PlayButton"

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [videoSrc, setVideoSrc] = useState(null)
  const [isVideoLoading, setIsVideoLoading] = useState(false)
  const [videoError, setVideoError] = useState(false)

  const handleVideoOpen = useCallback(async () => {
    if (isVideoLoading || videoSrc) {
      setIsVideoOpen(true)
      return
    }

    setIsVideoLoading(true)
    setVideoError(false)

    try {
      // Dynamic import with better error handling
      const videoModule = await import("../assets/videos/video3.mp4")
      setVideoSrc(videoModule.default)
      setIsVideoOpen(true)
    } catch (error) {
      console.error("Failed to load video:", error)
      setVideoError(true)
      // Optionally show error message to user
    } finally {
      setIsVideoLoading(false)
    }
  }, [isVideoLoading, videoSrc])

  const handleVideoClose = useCallback(() => {
    setIsVideoOpen(false)
    // Keep videoSrc in memory for better UX on reopening
  }, [])

  return (
    <>
      <section className="hero" id="hero" aria-labelledby="hero-heading">
        {/*
          CRITICAL: This should be your LCP image
          Make sure this matches the preloaded image in your HTML
        */}
        <img
          className="hero-img"
          src={HeroImg || "/placeholder.svg"}
          alt="Delicious Syrian fatayer and Middle Eastern cuisine spread"
          loading="eager"
          decoding="async"
          // fetchPriority="high"
          width="1920"
          height="auto"
        />

        <div className="container">
          <div className="row">
            <div className="col-lg-8 d-flex flex-column align-items-center align-items-lg-start">
              <h1 id="hero-heading" className="hero-heading">
                <span>Baked Fresh. Served Fast. Loved Always.</span>
              </h1>

              <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="50">
                فطائر طايم ببساطة اختصاص
              </p>

              <div className="hero-cta d-flex mt-4" data-aos="fade-down" data-aos-delay="100">
                <a href="#menu" className="cta-btn" aria-describedby="menu-description">
                  Our Menu
                </a>
                <span id="menu-description" className="sr-only">
                  Browse our authentic Syrian menu
                </span>

                <a
                  href="https://www.bistroo.nl/voorburg/restaurants/fatayer-time?utm_source=fatayer-time&utm_medium=bestelknop"
                  className="cta-btn"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-describedby="order-description"
                >
                  Online Bestellen
                </a>
                <span id="order-description" className="sr-only">
                  Order online through Bistroo - opens in new window
                </span>
              </div>

              {videoError && (
                <p className="video-error" role="alert">
                  Sorry, the video is currently unavailable. Please try again later.
                </p>
              )}
            </div>

            <div className="col-lg-4 d-flex align-items-center justify-content-center mt-5 mt-lg-0">
              <PlayButton onClick={handleVideoOpen} disabled={isVideoLoading} />
            </div>
          </div>
        </div>
      </section>

      <VideoModal isOpen={isVideoOpen} onClose={handleVideoClose} videoSrc={videoSrc} />
    </>
  )
}

export default Hero
