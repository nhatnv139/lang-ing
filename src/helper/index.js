export const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
}

export const scrollToId = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
}


export const getMobileOperatingSystem = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera
  if (/android/i.test(userAgent)) {
    return "Android"
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS"
  }

  return "unknown"
}

export const handleClickDownload = () => {
  const linkAppStore = 'https://apps.apple.com/us/app/athene-network/id6473136372'
  const linkAppChPlay = 'https://play.google.com/store/apps/details?id=network.athene.app'
  if(getMobileOperatingSystem() === 'Android') {
    return linkAppChPlay
  } else {
    return linkAppStore
  }
}
