<template>
  <div class="site-container">
    <!-- Hero Section with Video -->
    <section id="home" ref="heroSection" class="hero-section">
      <div class="hero-overlay"></div>
      <div class="video-container">
        <video 
          ref="heroVideo" 
          class="hero-video"
          muted 
          loop 
          playsinline
          preload="auto"
        >
          <!-- For demo purposes, using a placeholder video. Replace with your actual video -->
          <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-32809-large.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">{{ heroContent?.title || 'Bringing Stories to Life' }}</h1>
        <p class="hero-subtitle">{{ heroContent?.subtitle || 'Award-winning film production company creating cinematic experiences that captivate audiences worldwide.' }}</p>
        <button class="primary-button">
          {{ heroContent?.buttonText || 'Our Showreel' }}
        </button>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services-section">
      <div class="container">
        <h2 class="section-title">{{ servicesContent?.title || 'Our Services' }}</h2>
        <div class="services-grid">
          <div v-for="(service, index) in services" :key="index" class="service-card">
            <component :is="getIconComponent(service.icon)" class="service-icon" />
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="portfolio-section">
      <div class="container">
        <h2 class="section-title">{{ portfolioContent?.title || 'Our Work' }}</h2>
        <div class="portfolio-grid">
          <div v-for="(project, index) in projects" :key="index" class="portfolio-item">
            <div class="portfolio-overlay">
              <div class="portfolio-details">
                <h3 class="portfolio-item-title">{{ project.title }}</h3>
                <p class="portfolio-item-category">{{ project.category }}</p>
              </div>
            </div>
            <img :src="getImageUrl(project.mainImage) || project.image" alt="Project thumbnail" class="portfolio-image" />
          </div>
        </div>
        <div class="portfolio-action">
          <button class="secondary-button">
            {{ portfolioContent?.buttonText || 'View All Projects' }}
          </button>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section id="team" class="team-section">
      <div class="container">
        <h2 class="section-title">{{ teamContent?.title || 'Meet Our Team' }}</h2>
        <div class="team-grid">
          <div v-for="(member, index) in teamMembers" :key="index" class="team-member">
            <div class="member-photo-container">
              <img :src="getImageUrl(member.photo) || member.photo" alt="Team member" class="member-photo" />
            </div>
            <h3 class="member-name">{{ member.name }}</h3>
            <p class="member-role">{{ member.role }}</p>
            <p class="member-bio">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <div class="container">
        <h2 class="section-title">{{ contactContent?.title || 'Get In Touch' }}</h2>
        <div class="contact-grid">
          <div class="contact-info">
            <h3 class="contact-subtitle">{{ contactContent?.subtitle || 'Contact Information' }}</h3>
            <p class="contact-description">{{ contactContent?.description || 'Ready to bring your vision to life? Contact us today to discuss your project.' }}</p>
            
            <div class="contact-details">
              <div class="contact-item">
                <MapPin class="contact-icon" />
                <span>{{ contactInfo?.address || '123 Film Studio Way, Hollywood, CA 90028' }}</span>
              </div>
              <div class="contact-item">
                <Phone class="contact-icon" />
                <span>{{ contactInfo?.phone || '(323) 555-1234' }}</span>
              </div>
              <div class="contact-item">
                <Mail class="contact-icon" />
                <span>{{ contactInfo?.email || 'info@highdesertfilms.com' }}</span>
              </div>
            </div>
            
            <div class="social-links">
              <a v-for="(social, index) in socialLinks" :key="index" :href="social.url" class="social-link">
                <component :is="getIconComponent(social.platform)" class="social-icon" />
              </a>
            </div>
          </div>
          
          <div class="contact-form-container">
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" id="name" v-model="form.name" class="form-input" required />
                </div>
                <div class="form-group">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" id="email" v-model="form.email" class="form-input" required />
                </div>
              </div>
              <div class="form-group">
                <label for="subject" class="form-label">Subject</label>
                <input type="text" id="subject" v-model="form.subject" class="form-input" required />
              </div>
              <div class="form-group">
                <label for="message" class="form-label">Message</label>
                <textarea id="message" v-model="form.message" rows="5" class="form-textarea" required></textarea>
              </div>
              <button type="submit" class="primary-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-column">
            <h3 class="footer-title">{{ siteInfo?.companyName || 'HIGH DESERT FILMS' }}</h3>
            <p class="footer-text">{{ siteInfo?.tagline || 'Award-winning film production company creating cinematic experiences in the high desert since 2005.' }}</p>
          </div>
          <div class="footer-column">
            <h4 class="footer-heading">Quick Links</h4>
            <ul class="footer-links">
              <li><a href="#home" class="footer-link">Home</a></li>
              <li><a href="#services" class="footer-link">Services</a></li>
              <li><a href="#portfolio" class="footer-link">Portfolio</a></li>
              <li><a href="#team" class="footer-link">Team</a></li>
              <li><a href="#contact" class="footer-link">Contact</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4 class="footer-heading">Services</h4>
            <ul class="footer-links">
              <li v-for="(service, index) in services.slice(0, 5)" :key="index">
                <a href="#" class="footer-link">{{ service.title }}</a>
              </li>
            </ul>
          </div>
          <div class="footer-column">
            <h4 class="footer-heading">Newsletter</h4>
            <p class="footer-text">Subscribe to our newsletter for the latest updates.</p>
            <form @submit.prevent="subscribeNewsletter" class="newsletter-form">
              <input type="email" v-model="newsletter" placeholder="Your email" class="newsletter-input" required />
              <button type="submit" class="newsletter-button">
                <Send class="newsletter-icon" />
              </button>
            </form>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="copyright">&copy; {{ new Date().getFullYear() }} {{ siteInfo?.companyName || 'High Desert Films' }}. All rights reserved.</p>
        </div>
      </div>
    </footer>
    
    <!-- Loading State -->
    <div v-if="loading" class="loading-overlay">
      <div class="loading-content">
        <div class="loading-spinner"></div>
        <p class="loading-text">Loading content...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { 
  Film, Video, Camera, Clapperboard, Tv, PenTool, 
  MapPin, Phone, Mail, Instagram, Twitter, Youtube, Linkedin, Send 
} from 'lucide-vue-next';

// Initialize default data first to avoid reference errors
const services = ref([]);
const projects = ref([]);
const teamMembers = ref([]);
const socialLinks = ref([]);
const heroContent = ref(null);
const servicesContent = ref(null);
const portfolioContent = ref(null);
const teamContent = ref(null);
const contactContent = ref(null);
const siteInfo = ref(null);
const contactInfo = ref(null);
const loading = ref(false);
const heroVideo = ref(null);
const heroSection = ref(null);
let observer = null;
let sanityClient = null;
let imageUrlBuilder = null;

// Initialize with default data
const initializeDefaultData = () => {
  services.value = [
    {
      title: 'Feature Films',
      description: 'From concept to screen, we produce compelling feature films that resonate with audiences and critics alike.',
      icon: 'film'
    },
    {
      title: 'Commercial Production',
      description: 'High-impact commercials that elevate your brand and connect with your target audience.',
      icon: 'video'
    },
    {
      title: 'Documentary',
      description: 'Authentic storytelling that captures real-life narratives with depth and nuance.',
      icon: 'camera'
    },
    {
      title: 'Music Videos',
      description: 'Visually stunning music videos that enhance the artist\'s vision and captivate viewers.',
      icon: 'clapperboard'
    },
    {
      title: 'TV Production',
      description: 'Engaging television content from series to specials that keeps audiences coming back.',
      icon: 'tv'
    },
    {
      title: 'Post-Production',
      description: 'Expert editing, color grading, sound design, and visual effects to perfect your project.',
      icon: 'penTool'
    }
  ];
  
  projects.value = [
    {
      title: 'The Last Journey',
      category: 'Feature Film',
      image: '/placeholder.svg?height=720&width=1280'
    },
    {
      title: 'Mountain Explorers',
      category: 'Documentary',
      image: '/placeholder.svg?height=720&width=1280'
    },
    {
      title: 'City Lights',
      category: 'Music Video',
      image: '/placeholder.svg?height=720&width=1280'
    },
    {
      title: 'Brand Revolution',
      category: 'Commercial',
      image: '/placeholder.svg?height=720&width=1280'
    },
    {
      title: 'Echoes of Time',
      category: 'TV Series',
      image: '/placeholder.svg?height=720&width=1280'
    },
    {
      title: 'Urban Stories',
      category: 'Short Film',
      image: '/placeholder.svg?height=720&width=1280'
    }
  ];
  
  teamMembers.value = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      photo: '/placeholder.svg?height=400&width=400',
      bio: 'Award-winning director with over 15 years of experience in feature films and documentaries.'
    },
    {
      name: 'Michael Chen',
      role: 'Cinematographer',
      photo: '/placeholder.svg?height=400&width=400',
      bio: 'Visionary cinematographer known for creating stunning visual narratives and innovative camera techniques.'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Producer',
      photo: '/placeholder.svg?height=400&width=400',
      bio: 'Experienced producer who has successfully managed productions across multiple continents.'
    },
    {
      name: 'David Williams',
      role: 'Post-Production Lead',
      photo: '/placeholder.svg?height=400&width=400',
      bio: 'Expert in editing and visual effects with credits on major studio productions.'
    }
  ];
  
  socialLinks.value = [
    { platform: 'instagram', url: '#' },
    { platform: 'twitter', url: '#' },
    { platform: 'youtube', url: '#' },
    { platform: 'linkedin', url: '#' }
  ];
};

// Initialize default data immediately
initializeDefaultData();

// Helper function to get image URL from Sanity
const getImageUrl = (source) => {
  if (!source || !imageUrlBuilder) return null;
  try {
    return imageUrlBuilder.image(source).url();
  } catch (error) {
    console.error('Error generating image URL:', error);
    return null;
  }
};

// Helper function to get the correct icon component based on name
const getIconComponent = (iconName) => {
  const iconMap = {
    film: Film,
    video: Video,
    camera: Camera,
    clapperboard: Clapperboard,
    tv: Tv,
    penTool: PenTool,
    instagram: Instagram,
    twitter: Twitter,
    youtube: Youtube,
    linkedin: Linkedin
  };
  
  return iconMap[iconName] || Film;
};

// Fetch data from Sanity
const fetchContent = async () => {
  if (!sanityClient) {
    return;
  }
  
  try {
    loading.value = true;
    
    // Fetch site information
    const siteInfoData = await sanityClient.fetch(`*[_type == "siteSettings"][0]`);
    siteInfo.value = siteInfoData;
    
    // Fetch hero content
    const heroData = await sanityClient.fetch(`*[_type == "hero"][0]`);
    heroContent.value = heroData;
    
    // Fetch services
    const servicesData = await sanityClient.fetch(`
      *[_type == "servicesSection"][0]{
        title,
        "services": services[]->
      }
    `);
    servicesContent.value = servicesData;
    services.value = servicesData?.services || [];
    
    // Fetch portfolio projects
    const portfolioData = await sanityClient.fetch(`
      *[_type == "portfolioSection"][0]{
        title,
        buttonText,
        "projects": projects[]->
      }
    `);
    portfolioContent.value = portfolioData;
    projects.value = portfolioData?.projects || [];
    
    // Fetch team members
    const teamData = await sanityClient.fetch(`
      *[_type == "teamSection"][0]{
        title,
        "members": members[]->
      }
    `);
    teamContent.value = teamData;
    teamMembers.value = teamData?.members || [];
    
    // Fetch contact information
    const contactData = await sanityClient.fetch(`*[_type == "contactSection"][0]`);
    contactContent.value = contactData;
    
    // Fetch contact details
    const contactInfoData = await sanityClient.fetch(`*[_type == "contactInfo"][0]`);
    contactInfo.value = contactInfoData;
    
    // Fetch social links
    const socialData = await sanityClient.fetch(`*[_type == "socialLinks"][0].links`);
    socialLinks.value = socialData || [];
    
    loading.value = false;
  } catch (error) {
    console.error('Error fetching content from Sanity:', error);
    loading.value = false;
  }
};

// Handle scroll events to control video playback speed and position
const handleScroll = () => {
  if (!heroVideo.value || !heroSection.value) return;
  
  const rect = heroSection.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  
  // Calculate how far the hero section is scrolled (0 = fully visible at top, 1 = fully scrolled out of view)
  const scrollProgress = 1 - (rect.bottom / (windowHeight + rect.height));
  
  if (scrollProgress >= 0 && scrollProgress <= 1) {
    // Adjust video playback based on scroll position
    if (heroVideo.value.duration) {
      // Map scroll progress to video time (0-1 to 0-duration)
      const targetTime = scrollProgress * heroVideo.value.duration;
      
      // Only update if the difference is significant to avoid constant seeking
      if (Math.abs(heroVideo.value.currentTime - targetTime) > 0.5) {
        heroVideo.value.currentTime = targetTime;
      }
    }
  }
};

// Contact form
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const submitForm = () => {
  // Here you would typically send the form data to your backend
  console.log('Form submitted:', form.value);
  alert('Thank you for your message! We will get back to you soon.');
  // Reset form
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
};

// Newsletter
const newsletter = ref('');

const subscribeNewsletter = () => {
  console.log('Newsletter subscription:', newsletter.value);
  alert('Thank you for subscribing to our newsletter!');
  newsletter.value = '';
};

// Sanity client setup - wrapped in try/catch to prevent build errors
onMounted(() => {
  // Try to initialize Sanity client
  try {
    if (typeof window !== 'undefined') {
      const importSanityClient = async () => {
        try {
          const { createClient } = await import('@sanity/client');
          const imageUrlBuilderModule = await import('@sanity/image-url');
          
          // Initialize Sanity client
          sanityClient = createClient({
            projectId: 'your-project-id', // Replace with your actual project ID
            dataset: 'production',
            useCdn: true,
            apiVersion: '2023-05-03',
          });
          
          // Initialize image URL builder
          imageUrlBuilder = imageUrlBuilderModule.default(sanityClient);
          
          // Fetch content once Sanity is initialized
          fetchContent();
        } catch (error) {
          console.error('Failed to initialize Sanity:', error);
        }
      };
      
      importSanityClient().catch(console.error);
    }
  } catch (error) {
    console.error('Error setting up Sanity:', error);
  }

  // Set up video playback
  if (heroVideo.value && heroSection.value) {
    // Create an Intersection Observer to detect when the hero section is visible
    try {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Play the video when the hero section is in view
            heroVideo.value.play().catch(error => {
              console.error("Video play failed:", error);
            });
          } else {
            // Pause the video when the hero section is out of view
            heroVideo.value.pause();
          }
        });
      }, { threshold: 0.1 }); // Trigger when at least 10% of the hero is visible
      
      // Start observing the hero section
      observer.observe(heroSection.value);
      
      // Also handle scroll events for more dynamic control
      window.addEventListener('scroll', handleScroll);
    } catch (error) {
      console.error('Error setting up video observer:', error);
    }
  }
});

// Clean up event listeners and observers
onUnmounted(() => {
  if (observer && heroSection.value) {
    try {
      observer.unobserve(heroSection.value);
    } catch (error) {
      console.error('Error cleaning up observer:', error);
    }
  }
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
@import url('https://use.typekit.net/xyz.css'); /* Replace 'xyz' with your actual Adobe Fonts project ID */

/* Base Styles */
:root {
  --color-black: #000000;
  --color-white: #ffffff;
  --color-zinc-300: #d4d4d8;
  --color-zinc-400: #a1a1aa;
  --color-zinc-700: #3f3f46;
  --color-zinc-800: #27272a;
  --color-zinc-900: #18181b;
  --color-amber-500: #f59e0b;
  --color-amber-600: #d97706;
  --color-yellow: #FED016;
  --font-thin: 100;
  --font-light: 200;
  --font-regular: 300;
}

html {
  scroll-behavior: smooth;
  font-family: 'adobe-clean', sans-serif;
  font-weight: var(--font-thin);
}

body {
  font-family: 'adobe-clean', sans-serif;
  font-weight: var(--font-thin);
  margin: 0;
  padding: 0;
  color: var(--color-white);
  background-color: var(--color-black);
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'adobe-clean', sans-serif;
  font-weight: var(--font-light);
  margin: 0;
}

.site-container {
  min-height: 100vh;
  background-color: var(--color-black);
  color: var(--color-white);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Section Styles */
section {
  scroll-margin-top: 0;
}

.section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 4rem;
  font-weight: var(--font-regular);
}

@media (min-width: 768px) {
  .section-title {
    font-size: 2.25rem;
  }
}

/* Button Styles */
.primary-button {
  background-color: var(--color-yellow);
  color: var(--color-black);
  font-weight: var(--font-regular);
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.primary-button:hover {
  background-color: var(--color-amber-600);
}

.secondary-button {
  background-color: transparent;
  color: var(--color-yellow);
  font-weight: var(--font-regular);
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  border: 2px solid var(--color-yellow);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.secondary-button:hover {
  background-color: var(--color-yellow);
  color: var(--color-black);
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3));
  z-index: 10;
}

.video-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-content {
  position: relative;
  z-index: 20;
  text-align: center;
  padding: 0 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-title {
  font-size: 2.25rem;
  margin-bottom: 1rem;
  font-weight: var(--font-regular);
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3.75rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
  }
}

/* Services Section */
.services-section {
  padding: 5rem 0;
  background-color: var(--color-zinc-900);
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.service-card {
  background-color: var(--color-zinc-800);
  padding: 2rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s;
}

.service-card:hover {
  background-color: var(--color-zinc-700);
}

.service-icon {
  height: 3rem;
  width: 3rem;
  margin-bottom: 1rem;
  color: var(--color-yellow);
}

.service-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: var(--font-regular);
}

.service-description {
  color: var(--color-zinc-300);
}

/* Portfolio Section */
.portfolio-section {
  padding: 5rem 0;
  background-color: var(--color-black);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .portfolio-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.portfolio-item {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  aspect-ratio: 16 / 9;
  cursor: pointer;
}

.portfolio-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
  z-index: 10;
}

.portfolio-item:hover .portfolio-overlay {
  opacity: 1;
}

.portfolio-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.portfolio-item:hover .portfolio-image {
  transform: scale(1.05);
}

.portfolio-item-title {
  font-size: 1.25rem;
  font-weight: var(--font-regular);
}

.portfolio-item-category {
  color: var(--color-yellow);
}

.portfolio-action {
  text-align: center;
  margin-top: 3rem;
}

/* Team Section */
.team-section {
  padding: 5rem 0;
  background-color: var(--color-zinc-900);
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .team-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.team-member {
  text-align: center;
}

.member-photo-container {
  position: relative;
  width: 12rem;
  height: 12rem;
  margin: 0 auto 1rem;
  border-radius: 9999px;
  overflow: hidden;
}

.member-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-name {
  font-size: 1.25rem;
  font-weight: var(--font-regular);
}

.member-role {
  color: var(--color-yellow);
  margin-bottom: 0.5rem;
}

.member-bio {
  color: var(--color-zinc-300);
  font-size: 0.875rem;
}

/* Contact Section */
.contact-section {
  padding: 5rem 0;
  background-color: var(--color-black);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 1024px) {
  .contact-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.contact-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: var(--font-regular);
}

.contact-description {
  color: var(--color-zinc-300);
  margin-bottom: 2rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
}

.contact-icon {
  height: 1.5rem;
  width: 1.5rem;
  color: var(--color-yellow);
  margin-right: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-zinc-800);
  padding: 0.5rem;
  border-radius: 9999px;
  transition: background-color 0.3s;
}

.social-link:hover {
  background-color: var(--color-yellow);
}

.social-icon {
  height: 1.25rem;
  width: 1.25rem;
}

.contact-form-container {
  width: 100%;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .form-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: var(--font-regular);
}

.form-input, .form-textarea {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--color-zinc-800);
  border-radius: 0.5rem;
  border: none;
  color: var(--color-white);
  outline: none;
  transition: box-shadow 0.3s;
}

.form-input:focus, .form-textarea:focus {
  box-shadow: 0 0 0 2px var(--color-yellow);
}

/* Footer */
.site-footer {
  padding: 3rem 0;
  background-color: var(--color-zinc-900);
  border-top: 1px solid var(--color-zinc-800);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.footer-title {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: var(--font-regular);
}

.footer-heading {
  font-weight: var(--font-regular);
  margin-bottom: 1rem;
}

.footer-text {
  color: var(--color-zinc-300);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-link {
  color: var(--color-zinc-300);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-link:hover {
  color: var(--color-yellow);
}

.newsletter-form {
  display: flex;
}

.newsletter-input {
  flex-grow: 1;
  padding: 0.5rem;
  background-color: var(--color-zinc-800);
  border: none;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  color: var(--color-white);
  outline: none;
}

.newsletter-input:focus {
  box-shadow: 0 0 0 2px var(--color-yellow);
}

.newsletter-button {
  background-color: var(--color-yellow);
  color: var(--color-black);
  border: none;
  padding: 0.5rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.newsletter-button:hover {
  background-color: var(--color-amber-600);
}

.newsletter-icon {
  height: 1.25rem;
  width: 1.25rem;
}

.footer-bottom {
  border-top: 1px solid var(--color-zinc-800);
  margin-top: 3rem;
  padding-top: 2rem;
  text-align: center;
}

.copyright {
  color: var(--color-zinc-400);
}

/* Loading State */
.loading-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}

.loading-content {
  text-align: center;
}

.loading-spinner {
  width: 4rem;
  height: 4rem;
  border: 4px solid var(--color-yellow);
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

.loading-text {
  font-size: 1.25rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>