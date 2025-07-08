
const researchProjects = [
  {
    title: "Seasonal Weather Pattern Prediction using Machine Learning",
    description:
      "Prediction of seasonal weather patterns is one of the dominant concerns in a country highly dependent on agriculture; however, the task is very challenging because of the non-linear characteristics of weather and climatic patterns in Bangladesh. ENSO-mediated variation in atmospheric-oceanic factors has significant consequences for weather conditions. We studied these variations in two datasets of monthly average temperature and monthly average rainfall intensity in 29 stations all over Bangladesh from 1977 to 2022. Supervised machine learning analysis (K-Fold Cross Validation) was performed on different climatic parameters about ENSO events and different locations to anticipate efficient accuracy. Both datasets were divided into two parts to train and validate the model. 60% of both datasets were used as training datasets, and later, the remaining data was used for validation purposes. Heatmap analysis showed the correlation between ENSO indices (SOI, ONI, NINO 3.4 SST).  The model achieved MAE, RMSE, and R2 values of 0.6, 0.8, and 0.95 respectively, in the temperature dataset, indicating a strong correlation between predictions and actual temperature. On the other hand, the value of MAE, RMSE, and R2 was found to be 134.48, 184.28, and 0.64 gradually in the rainfall dataset. The developed KFVC model showed better performance and accuracy in predicting temperature than rainfall.",
    tags: ["Seasonal weather patterns prediction", "Correlation", "Supervised machine learning", "Temperature", "Rainfall"],
    status: "publications",
    images: [
      "Images/Research/Publications/Seasonal Weather Pattern Prediction using Machine Learning/K Fold Cross Validation Model.jpg",
      "Images/Research/Publications/Seasonal Weather Pattern Prediction using Machine Learning/Heatmap Rainfall.jpg",
      "Images/Research/Publications/Seasonal Weather Pattern Prediction using Machine Learning/Heatmap Tavg.jpg",
      "Images/Research/Publications/Seasonal Weather Pattern Prediction using Machine Learning/Training and testing data distribution in Rainfall dataset.jpg",
      "Images/Research/Publications/Seasonal Weather Pattern Prediction using Machine Learning/Training and testing data distribution in temperature dataset.jpg"
    ],
    downloadLink: "#",
  },
  {
    title: "Jute Fiber Optimization for Enhancing Concrete Properties: A Review",
    description:
      "Natural fibers, particularly jute fiber (JTF), have emerged as an excellent alternative for concrete reinforcement due to their low cost and widespread availability. This review examines the characteristics and potential applications of JTF in concrete, focusing on its effects on fresh properties, strength parameters, and durability characteristics. The study reveals that JTF improves concrete strength and durability but decreases fluidity, similar to synthetic fibers. Findings indicate that increasing JTF content reduces workability due to higher water demand, while optimal fiber lengths of 10-20 mm and content ranging from 0.3% to 0.45% significantly enhance compressive and tensile strengths. However, the optimum percentage of JTF in concrete is critical, as higher doses adversely affect strength and durability. Current large-scale applications are limited by challenges such as reduced workability, variability in fiber quality, and the balling effect. The review suggests that future research should prioritize enhancing workability by utilizing optimized mix designs, establishing standardized fiber quality, and conducting thorough long-term durability studies. Additionally, it is recommended that life-cycle and cost-benefit analyses be conducted in order to assess the sustainability and financial viability of JTF-reinforced concrete.",
    tags: ["Natural Fibers", "Jute Fiber", "Fiber-Reinforced Concrete", "Fiber Optimization", "Concrete Properties"],
    status: "publications",
    images: [
      "Images/Research/Publications/Jute Fiber Optimization for Enhancing Concrete Properties A Review/combined_strength_28_dual_axis.jpg",
      "Images/Research/Publications/Jute Fiber Optimization for Enhancing Concrete Properties A Review/optimized_compressive_strength_7d.jpg",
      "Images/Research/Publications/Jute Fiber Optimization for Enhancing Concrete Properties A Review/optimized_compressive_strength_28d.jpg",
      "Images/Research/Publications/Jute Fiber Optimization for Enhancing Concrete Properties A Review/slump.jpg",
      "Images/Research/Publications/Jute Fiber Optimization for Enhancing Concrete Properties A Review/Split Tensile Strength in MPa_28d.jpg",
    ],
    downloadLink: "#",
  },
  {
    title: "Prediction of Tropical Cyclone in Bangladesh Using ENSO Index Through Ensemble Learning Technique",
    description:
      "Tropical cyclones have catastrophic impacts on life and infrastructure in many places on the earth. Accurate prediction is therefore, crucial for cyclone-prone regions like Bangladesh. This study employs an ensemble learning approach to predict tropical cyclones using relationships between El Niño Southern Oscillation (ENSO) indices and cyclone occurrences. Cyclone data from 1977 to 2022 reveal significant dataset imbalance, with only 21 cyclone events in 540 months. A voting ensemble model with 17 Random Forest classifiers was developed, incorporating features such as incorporation of a diverse set of input parameters, including the Oceanic Niño Index (ONI), NINO 3.4 Sea Surface Temperature (SST), Southern Oscillation Index (SOI), Indian Ocean Dipole (IOD), Pacific Decadal Oscillation (PDO), Pacific-North American pattern (PNA), Bivariate ENSO Timeseries (BEST), Tropical Northern Hemisphere Index (TNI), 200 MB Zonal Winds, ENSO Events, and Dominant Cycle. The model achieved 75% overall accuracy, with 80% accuracy for cyclone occurrence prediction and 74% for non-cyclone events. Results demonstrate the significance of ENSO indices and the effectiveness of ensemble learning in addressing data imbalance and capturing complex climate-cyclone relationships. This framework offers a reliable approach for cyclone prediction, aiding disaster preparedness and resource allocation in vulnerable regions.",
    tags: ["Tropical cyclone prediction", "ENSO indices", "Ensemble learning", "Disaster management", "Random Forest Classifier", "Bangladesh"],
    status: "submitted",
    images: [
      "Images/Research/Submitted/submitted.png"
    ],
    downloadLink: "#",
  },
  {
    title: "Seasonal Weather Pattern Prediction from ENSO Indices using Machine Learning",
    description:
      "The accurate prediction of seasonal weather patterns holds significant importance in supporting agriculture, disaster management, and economic planning in Bangladesh. However, the non-linear characteristics of weather and climatic patterns makes it quite challenging. Recently, the significant impact of El Nino-Southern Oscillation (ENSO) indices on regional climate variability have increasingly been recognized. This study investigates the correlation between nine ENSO indices and both temperature and rainfall patterns across Bangladesh and also evaluates the effectiveness of machine learning (ML) models in predicting these weather variables. Historical monthly data from 29 meteorological stations, spanning 1977 to 2022, were analyzed. Six supervised ML models—Random Forest (RF), Decision Tree (DT), K-Fold Cross-Validation (KFCV), XGBoost (XGB), Linear Regression (LR), and K-Nearest Neighbors (KNN) were applied. Performance was evaluated using R² score, Mean Absolute Error (MAE), and Root Mean Square Error (RMSE). Results revealed that ENSO indices have a notable impact on climate parameters in Bangladesh. Among these models, XGB achieved the highest R² scores for temperature prediction, with values of 0.8824 (Tmax), 0.9706 (Tmin), and 0.9559 (Tavg). RF and KFCV also showed strong performance, with RF achieving R² values of 0.8770 (Tmax), 0.9699 (Tmin) and 0.9531 (Tavg) and KFCV achieving R² scores of 0.8606 (Tmax), 0.9619 (Tmin), and 0.9438 (Tavg). Rainfall prediction, however, yielded lower accuracy, with RF recording the highest R² of 0.6273. The study highlights the impact of ENSO indices and concludes that XGB, RF, and KFCV are highly effective in modeling seasonal climate patterns influenced by ENSO",
    tags: ["Seasonal weather patterns prediction", "ENSO", "Supervised machine learning", "Temperature", "Rainfall"],
    status: "submitted",
    images: [
      "Images/Research/Submitted/submitted.png"
    ],
    downloadLink: "#",
  },
  {
    title: "Prediction and Optimization of Strength and CO<sub>2</sub> Emission for Geopolymer Concrete Mix Design using Machine Learning",
    description:
      "The growing demand for sustainable construction materials has driven interest in geopolymer concrete (GPC) as an eco-friendly alternative to conventional Ordinary Portland Cement (OPC) concrete. GPC, synthesized using industrial by-products such as fly ash and ground granulated blast furnace slag (GGBS), offers considerable potential to reduce carbon emissions. However, the lack of standardized mix design procedures and the complex interdependence of its components pose significant challenges in achieving optimal performance. This study presents a machine learning (ML)-based approach for optimizing GPC mix design with the dual objective of minimizing CO₂ emissions and maximizing compressive strength. A comprehensive dataset comprising 1,507 data points was compiled from 23 published studies. The Extreme Gradient Boosting (XGBoost) model was employed due to its robustness and high predictive capability in structured data environments. The model achieved strong predictive performance with an R² of 0.9113, MAE of 3.9232, and RMSE of 6.2736, indicating its reliability in predicting compressive strength. Further, Bayesian Optimization was applied to identify optimal mix proportions that meet strength requirements while minimizing environmental impact. The optimization process was tested on different mix designs, with one showing a 35.4% increase in compressive strength and a 77.7% reduction in carbon emissions. Additionally, a user-friendly web application, Graphical User Interface (GUI), was developed to allow users to input their mix design parameters, receive instant predictions and optimization recommendations. This study highlights the potential of integrating machine learning with sustainable construction practices and offers a scalable, data-driven solution for environmentally responsible concrete design.",
    tags: ["Geopolymer concrete", "Mix design optimization", "Compressive strength prediction", "Machine learning", "Sustainability"],
    status: "submitted",
    images: [
      "Images/Research/Submitted/submitted.png"
    ],
    downloadLink: "#",
  },
]

// Global variables
let currentFilter = "all"
let currentProject = 0
let currentSlide = 0

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeProjects();
  initializeFilters();
  addSearchFunctionality();
  applyFilterFromURL();
});

function applyFilterFromURL() {
  const params = new URLSearchParams(window.location.search);
  const filter = params.get("filter");

  if (filter && (filter === "all" || filter === "publications" || filter === "ongoing" || filter === "submitted")) {
    setActiveFilter(filter);
    filterProjects(filter);
  }
}


// Initialize projects
function initializeProjects() {
  renderProjects(researchProjects)
  updateFilterCounter(researchProjects.length, researchProjects.length)
}

// Initialize filter buttons
function initializeFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn")

  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter")
      setActiveFilter(filter)
      filterProjects(filter)
    })
  })
}

// Set active filter button
function setActiveFilter(filter) {
  const filterButtons = document.querySelectorAll(".filter-btn")

  filterButtons.forEach(button => {
    button.classList.remove("active")
  })

  const button = document.querySelector(`[data-filter="${filter}"]`);
  if (button) {
    button.classList.add("active");
  }

  currentFilter = filter
}

// Filter projects based on status
function filterProjects(filter) {
  let filteredProjects

  if (filter === "all") {
    filteredProjects = researchProjects
  } else {
    filteredProjects = researchProjects.filter(project => project.status === filter)
  }

  // Add animation class
  const projectsGrid = document.querySelector(".projects-grid")
  projectsGrid.classList.add("filtering")

  // Fade out current projects
  setTimeout(() => {
    renderProjects(filteredProjects)
    updateFilterCounter(filteredProjects.length, researchProjects.length)

    // Remove animation class
    setTimeout(() => {
      projectsGrid.classList.remove("filtering")
    }, 100)
  }, 200)
}

// Render projects to the grid
function renderProjects(projects) {
  const projectsGrid = document.querySelector(".projects-grid")

  if (projects.length === 0) {
    projectsGrid.innerHTML = `
      <div class="no-projects">
        <i class='bx bx-search-alt-2'></i>
        <h3>No projects found</h3>
        <p>Try adjusting your filters or search terms</p>
      </div>
    `
    return
  }

  projectsGrid.innerHTML = ""

  projects.forEach((project, index) => {
    const originalIndex = researchProjects.findIndex(p => p.title === project.title)
    const statusClass = project.status
    const statusText = project.status.charAt(0).toUpperCase() + project.status.slice(1)

    const projectCard = document.createElement("div")
    projectCard.className = "project-card"
    projectCard.setAttribute("data-status", project.status)
    projectCard.onclick = () => openModal(originalIndex)

    projectCard.innerHTML = `
      <div class="project-image-container">
        <img src="${project.images[0]}" alt="${project.title}" class="project-image">
        <div class="project-overlay">
          <i class='bx bx-expand-alt'></i>
        </div>
        <div class="status-badge ${statusClass}">${statusText}</div>
      </div>
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description.substring(0, 150)}...</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
    `

    projectsGrid.appendChild(projectCard)

    // Add entrance animation
    setTimeout(() => {
      projectCard.classList.add("filter-results-enter")
    }, index * 100)
  })
}

// Update filter counter
function updateFilterCounter(filteredCount, totalCount) {
  let counterElement = document.querySelector(".filter-counter")

  if (!counterElement) {
    counterElement = document.createElement("div")
    counterElement.className = "filter-counter"
    document.querySelector(".research-projects").appendChild(counterElement)
  }

  const filterText = currentFilter === "all" ? "All Projects" :
    currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1)

  counterElement.innerHTML = `
    Showing <span>${filteredCount}</span> of <span>${totalCount}</span> projects
    ${currentFilter !== "all" ? ` in <span>${filterText}</span> category` : ""}
  `
}

// Search functionality
function addSearchFunctionality() {
  const searchContainer = document.createElement("div")
  searchContainer.className = "search-container"
  searchContainer.innerHTML = `
    <div class="search-box">
      <i class='bx bx-search'></i>
      <input type="text" placeholder="Search projects..." id="projectSearch">
      <button class="clear-search" id="clearSearch" style="display: none;">
        <i class='bx bx-x'></i>
      </button>
    </div>
  `

  const filtersContainer = document.querySelector(".project-filters")
  filtersContainer.parentNode.insertBefore(searchContainer, filtersContainer)

  const searchInput = document.getElementById("projectSearch")
  const clearButton = document.getElementById("clearSearch")

  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase().trim()

    if (searchTerm.length > 0) {
      clearButton.style.display = "block"
      searchProjects(searchTerm)
    } else {
      clearButton.style.display = "none"
      filterProjects(currentFilter)
    }
  })

  clearButton.addEventListener("click", function () {
    searchInput.value = ""
    this.style.display = "none"
    filterProjects(currentFilter)
    searchInput.focus()
  })
}

// Search projects
function searchProjects(searchTerm) {
  let baseProjects = currentFilter === "all" ? researchProjects :
    researchProjects.filter(project => project.status === currentFilter)

  const searchResults = baseProjects.filter(project => {
    const titleMatch = project.title.toLowerCase().includes(searchTerm)
    const descriptionMatch = project.description.toLowerCase().includes(searchTerm)
    const tagsMatch = project.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    const statusMatch = project.status.toLowerCase().includes(searchTerm)

    return titleMatch || descriptionMatch || tagsMatch || statusMatch
  })

  renderProjects(searchResults)
  updateFilterCounter(searchResults.length, researchProjects.length)
}

// Modal functionality
function openModal(projectIndex) {
  const project = researchProjects[projectIndex]
  currentProject = projectIndex
  currentSlide = 0

  const modal = document.getElementById("projectModal")

  // Populate modal content
  document.getElementById("modalTitle").textContent = project.title
  document.getElementById("modalDescription").textContent = project.description

  // Add status to modal
  const modalContent = document.querySelector(".modal-right")
  let statusElement = modalContent.querySelector(".modal-status")

  if (!statusElement) {
    statusElement = document.createElement("div")
    statusElement.className = "modal-status"
    modalContent.insertBefore(statusElement, modalContent.firstChild)
  }

  const statusText = project.status.charAt(0).toUpperCase() + project.status.slice(1)
  statusElement.innerHTML = `<div class="status-badge ${project.status} modal-status-badge">${statusText}</div>`

  // Populate tags
  const tagsContainer = document.getElementById("modalTags")
  tagsContainer.innerHTML = ""
  project.tags.forEach(tag => {
    const tagElement = document.createElement("span")
    tagElement.className = "tag"
    tagElement.textContent = tag
    tagsContainer.appendChild(tagElement)
  })

  // Populate features
  // const featuresContainer = document.getElementById("modalFeatures")
  // featuresContainer.innerHTML = ""
  // project.features.forEach(feature => {
  //   const featureElement = document.createElement("li")
  //   featureElement.textContent = feature
  //   featuresContainer.appendChild(featureElement)
  // })

  // // Set download and GitHub links
  // document.getElementById("modalDownload").href = project.downloadLink
  // document.getElementById("modalGithub").href = project.githubLink

  // Populate slider images
  const slidesContainer = document.getElementById("modalSlides")
  slidesContainer.innerHTML = ""
  project.images.forEach((image, index) => {
    const slideElement = document.createElement("div")
    slideElement.className = "slide"
    slideElement.innerHTML = `<img src="${image}" alt="Project Image ${index + 1}">`
    slidesContainer.appendChild(slideElement)
  })

  // Populate slider dots
  const dotsContainer = document.getElementById("sliderDots")
  dotsContainer.innerHTML = ""
  project.images.forEach((_, index) => {
    const dotElement = document.createElement("span")
    dotElement.className = `dot ${index === 0 ? "active" : ""}`
    dotElement.onclick = () => goToSlide(index)
    dotsContainer.appendChild(dotElement)
  })

  // Show modal
  modal.style.display = "block"
  document.body.style.overflow = "hidden"

  // Update slider position
  updateSlider()
}

function closeModal() {
  const modal = document.getElementById("projectModal")
  modal.style.display = "none"
  document.body.style.overflow = "auto"
}

function changeSlide(direction) {
  const project = researchProjects[currentProject]
  const totalSlides = project.images.length

  currentSlide += direction

  if (currentSlide >= totalSlides) {
    currentSlide = 0
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1
  }

  updateSlider()
}

function goToSlide(slideIndex) {
  currentSlide = slideIndex
  updateSlider()
}

function updateSlider() {
  const slidesContainer = document.getElementById("modalSlides")
  const dots = document.querySelectorAll(".dot")

  // Update slider position
  const translateX = -currentSlide * 100
  slidesContainer.style.transform = `translateX(${translateX}%)`

  // Update active dot
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide)
  })
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Close modal when clicking outside
  window.onclick = (event) => {
    const modal = document.getElementById("projectModal")
    if (event.target === modal) {
      closeModal()
    }
  }

  // Close modal with Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal()
    }
  })

  // Keyboard navigation for slider
  document.addEventListener("keydown", (event) => {
    const modal = document.getElementById("projectModal")
    if (modal.style.display === "block") {
      if (event.key === "ArrowLeft") {
        changeSlide(-1)
      } else if (event.key === "ArrowRight") {
        changeSlide(1)
      }
    }
  })
})
