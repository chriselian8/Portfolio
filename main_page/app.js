const toggleSelector = () => {
  if ($('.nav-bar-contents').css('display') == 'flex') {
    $('.nav-bar-contents').css('display', 'none')
    $('.all-contents').css('display', 'block')
  } else {
    $('.nav-bar-contents').css('display', 'flex')
    $('.all-contents').css('display', 'none')
  }
}

$(() => {
const $openButton = $('#open-modal')
const $modal = $('.resume-modal')
const $closeButton = $('#close-modal')

const openModal = () => {
  $modal.css('display', 'flex')
}
const closeModal = () => {
  $modal.css('display', 'none')
}

$openButton.on('click', openModal)
$closeButton.on('click', closeModal)

$('.nav-bar-selector').on('click', toggleSelector)

let currentSectionIndex = 0

const sectionIndex = $('.carousel-contents').children().length -1

$('.right-button').on('click', () => {
  $('.carousel-contents').children().eq(currentSectionIndex).css('display', 'none')
  if (currentSectionIndex < sectionIndex) {
    currentSectionIndex ++
  } else {
    currentSectionIndex = 0
  }
  $('.carousel-contents').children().eq(currentSectionIndex).css('display', 'block')
})
$('.left-button').on('click', () => {
  $('.carousel-contents').children().eq(currentSectionIndex).css('display', 'none')
  if (currentSectionIndex > 0) {
    currentSectionIndex --
  } else {
    currentSectionIndex = sectionIndex
  }
  $('.carousel-contents').children().eq(currentSectionIndex).css('display', 'block')
})
})
