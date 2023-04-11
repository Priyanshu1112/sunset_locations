const list = document.getElementsByClassName("list");
// console.log(li.length);
const titles = [
  "Santorini, Greece",
  "Angkor Wat – Siem Reap, Cambodia",
  "Swiss Alps, Switzerland",
  "Sheikh Zayed Mosque - Abu Dhabi, UAE",
  "Cairo, Egypt",
  "Barcelona, Spain",
  "Jimbaran Bay - Bali, Indonesia",
  "Florida Keys, USA",
  "Dubai Creek – Dubai, UAE",
  "Taj Mahal – Agra, India",
];
const maps = [
  "data:image/jpeg;base64,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",
  "https://cdn.britannica.com/27/4027-004-B57F84E9/Flag-Cambodia.jpg",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ0AAAC7CAMAAABIKDvmAAAAY1BMVEX/AAD+/v7/Ly/+8PD+8/P/UVH/Xl7/Tk7++vr+9vb+7u7/Rkb/WFj/urr/OTn/eXn/jIz/gID/4+P/YWH/n5//p6f/bm7/dHT/ISH/GRn/mpr/6en/3d3/fX3/t7f/o6P/rKz/LEHHAAACcUlEQVR4nO3dzU4iURRF4XtAxJI/QUG7W5T3f8oGlWbpQBxU+pyE9U2Ykc1KVQjJDdXiqJs9Tp7apfk1X/z+869B+3h9nmbvSjR6/lzjLntQsjvWmGSvSTc51TDGR45DjW32khKW7zVesncU8fJWI3tFGYcar9kjyljva2RvKCTaKntCIavmjXKybovsCYVs2yX/Pvlq2ubZEwqZt0H2hEIG1gBrkDXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xB1iBrkDXIGmQNsgZl1RiPvjdOWZVV4ya+d5OyKqvG1ZkaVymrrEHWIGuQNcgaZA2yBlmDrEHWIGuQNcgaZA2yBlmDrEHWIGuQNcgaZA2yBlmDrEHWIGuQNcgaZA2yBlmDrEHWIGtQVo3hmRrDlFW915h2wx+4PRMj4vYnb9P1/Ochvde4Pvs5+3Td73hrkDXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZgzy/QZ7tIc99kTXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xB1iBrkDXIGmQN8jmP5DNAyefDkjXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xB1iBrkDXIGmQNsgZZg6xBgzbPnlDIvN1nTyjkvi2zJxSybA/ZEwp5aKvsCYWsWmRPKCRarLM3lLHe1/DiOIpDjVn2iiJmbzXCL9mDZbzXiJyTNLWM41gjNtlb0m3iVCN22WuS7YI1orvky2PTxeca+x6z7egpe9f/N1jsTodX/wIl6yYVq++kdwAAAABJRU5ErkJggg==",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACACAMAAADzok/sAAAAIVBMVEX/AAAAcy////8AAABVonRUVFTAHAz/Pz/AAADVKB3VFRVVusOnAAAAsklEQVR4nO3PyQ2AMBAEsHCGpP+CqQH2gUbYHbi1mnPJVuz7fx0o8vf39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f3z+bv7+/v/87Ys1X/fc3m7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7++fzd/f39/f3/+5eWSr/q8tm7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/fzZ/f39/f/8//m8wasZBHv/7pwAAAABJRU5ErkJggg==",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACTCAMAAADSiocKAAAAb1BMVEXOESYAAAD////AkwDawGrr3a7+/vzPrDvs37Pw5cL8+vPjz4707NPu4rvq26ncxHPhy4Tl0pXexnn59Obn1ZzWuVrJoiT69+v17dXy6cvMqDHbwW3SsUj38d/EmQ/k0JHYvWLUtVDQr0LOqjffyoCFN0eDAAAEh0lEQVR4nO2a65KkKBBGZ0EoROWioIVaalm+/zNuavdc9gHSCGbzdLRlwY+vT4gJLf74QRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQfx/YX8x98l1xRbnzdyWx+6UC2313vu5vS3wTrlm/bikmbot8E450GslY6m7L/BOuSHB4fm6L/BOuWf9GtjreV/gnXKqCUJ16b7AO+XEiWzuC0SWk0IoUX+d6wbc0kt8fauhQ0jcdGQ5oeFQm2soGn3qqEsumdNYC9x0bDlzFcenEaUqw6CUFrVqhLmqysvkLffgwX6Nvc6a1oRgVn/oq0HawB+46chyPQ+8+j6XiXUd0z/vswq6etz0G+Sc/Z63dRNC8+3WtS53Ob2cV+4R06tLSvmnlE+vVOpeKT7OK7do1HhcuWFZVh7Grfg4G8fibNo/m3WfYhsDX5dlQI3HlXvxxXHTT/EROeeX3ANO4OvUG+6WBXehiStX877lom/fY/Gn3DS+bS9423PchSauXMn7iTfLsY/2Tznbz8fS8KnnJWo8rpzg48ZLKCmP/8hNHygnJd9GjjuL48oFvkeeuB93GIK/5Pp2Hz00R5jiUeNx5VY+z2AR+nfcfstt8d0HuHLvma+o8bhyFX/vYGH6ONvfcnaOUCtLvr9/rV5wwJU7+PYBC7UUu91/ys12LxYFzZ/IHWo8rlzLC6iI8GM/3v2Uc/5jeQONfcFxH/Thylmo+pfHMeoqfsltlf4c0NQsPXSjxuPKFfxYrhFYRSb8VT1sJdi7usbqcvAJNR5XbuMVv2pHONhRGlgm65Dg1F9VBpZmG2o8rlzkK7+qvq+UZ95obeBDuVMu9NAZUeNx5aDW8/Ecg655CSXWtvXw8WrOpnWEztzlHu40kSyVwsFIFGU65z/wfUDnGzUeV26Gv39uoTAGq4MUe9/PQgZtw9Is7dWJGo8rt58XZ1qCW7UztegBURunvXfLdF7WHTUeV+5z3lbboz40SzLA/Qf3WZCJ6aP7bBE6P6jxuHJnzSimJzONTmzyyzwvfmJJN4YNW3FWG9R4XLn+lBvYkIQxjbf9PvfWN8aIcmD6mgRR47Hl3BtmbiV9rZTYH8AulEr+3A6R0eUsJ0FOMymVtl1i5RLHMS4lS12rlYRukEPdCkGV08smmZicrxrvnk1stg0OTxeayrtJwNoT98Elrhws+vVRhFSWYONDVdergZOqLOtQnHsGNl+5E1UMtTqscqtrW3f+rk7ZAxbRBfo2JPbmo6t0CpK9KjZI1nh/CVUv1jimqyrvzUcZNYtOme54FSV81dKfT9DXp/ZJ6pi3HEuWpao1sfdRrS7UpTO+OcZxLry02Hv/6Pfc1DE2lHqISsRqm4OdhNvq86lXh/tvOLtBbmiLyat6kLCkhAUm656DhBLjp6JFf5fojlc1JLgcUwFMX8cDbJFvt4u/+33Lf/5iSC5XSC5XSC5XSC5XSC5XSC5XSC5XSC5XSC5XSC5XSC5XSC5XSC5XSC5XSC5XSC5XSC5XSC5XSC5XSC5XSC5XSC5XSC5XSC5X/gUZG7nXiA/KSwAAAABJRU5ErkJggg==",
  "https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAANlBMVEX////OESfPECfSDyXq6urfrLDEABjQEynMEija2trMESbSEinPEyrHAB3bn6Thq7Dr7uvo6ep5vJs6AAABrElEQVR4nO3cQU4CQRBA0R5FGWBQuP9lBQUJ/gNA4nu96FpWfnrdY5mnaT1xs4xluz3dW35dm3Cz1iQuTV642Z2aSHJvN9bfTR79Xp/JWpPQpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU3q/PfyPE/TzNW5yc8wzZcz/ftxGa/8Nfbv3NuPj8+TN24+xmFw7zCOj17h6RzH6tErPJ2VJqFJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKrsVlxb/MFGmaUP7bCBpsAAAAASUVORK5CYII=",
  "https://img.freepik.com/premium-vector/american-flag-illustration_617585-1634.jpg",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACACAMAAADzok/sAAAAIVBMVEX/AAAAcy////8AAABVonRUVFTAHAz/Pz/AAADVKB3VFRVVusOnAAAAsklEQVR4nO3PyQ2AMBAEsHCGpP+CqQH2gUbYHbi1mnPJVuz7fx0o8vf39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f3z+bv7+/v/87Ys1X/fc3m7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7++fzd/f39/f3/+5eWSr/q8tm7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/fzZ/f39/f/8//m8wasZBHv/7pwAAAABJRU5ErkJggg==",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAmVBMVEX/mTMSiAf/////lycAgQAAAIgAAIUAAH4AAIIAAIMAAHwAAHPi4u+kpMvz8/kAAHjn5/Lt7fXd3ey5uddPT6GZmcWDg7n6+v7Ly+HIyOJERJxlZao+PponJ5L29vy0tNbW1uggIJCfn8iGhrsYGJBNTaB2drQQEIx+fripqc5ra62QkMBXV6QiIpFfX6i+vtwyMpw6Opg1NZe0gadDAAAEvUlEQVR4nO3ba3OiSBiG4UzvdDcip8YDiAdQZAIxExP//4/btzHjZH1Nze6HpVPlc1Ul0eiH9g7Q2JKHBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/+gvuPYg4BqacGjCoQmHJhyacF+hSTI5LFd7uV8tD5PE9WDEF2gSHNbaGyklpVRq5Omfh8D1kBw3qaZ6pCiGVFrr/oYc6SZ3OyinTZIpdZCeevnhNyY1jf/jRXm0vejG6S7kssnObhmeNxMbcTSiEuZIt2aeZ7eancNxOWzy7NFrn3cnI/p9pbTfcmFO3ZxaeVN3A3PWJNrS5lAEmb3d5wgvt7KgoMe2kauhuWoSPdK2QHvIwt5ZpPTtQF/p+S7tVbQNPbqK4qhJRluJ17VGZB3di2yPF/o62AxdJkzbUZRt5mZwjpo0lOTY3wrtFGMPHq/vP5N+JxJHiuLomOKmycyTXinOUewLX1IYSTmW7/cpiSjpOTMno3PSJNA049TnQ4gIae8J6cVrSkWbSNdvJvRITbOPdnJO66RJo1QzM3RjaY8YMhLVVmR+JraViGhzEZn9vZnZp7kYnosmCy31+UR180oH1a4QWWyiODJxJhqajaPTpn80oee5OM130WSlVL3pZ11hJO0daiLWITUJ12KiaM+Spn9ssamVKhyMz0GTVNsDrOi6/o5fiVKLdmVis2qFLkXl27OV/rhCh1mdDj9AB01qmoftnz+Z2ir5+Cjk08JP49RfPElxHNvdpZvao2vhyVE9/AAdNHmkOfZ8ihpK2l4m4y4fJ7ryKp2M8248oe1D7vrHDc3Z++EHOHwTmojlr9tRISciHB/beZ3v87puj+OdmMiV+fUE6WI6Hr5J6amnaFEuzptK6av8GAfrKmzDah3Ex/zR798Iik1e5tGT8srBRzh8k7lSLf1ID9NlWNF5yHLcBuugLd6KNl0H87E9N0m7p+Zgj66tUvPBRzh8k2cl/fNZRzLbxut2kczXaWFXIEdFsG6TfH6KH2fnPSb3pXoefITDN3lVanpZBTDhytd12o6kNWrTg/ZPu8vKYzRV6nXwEQ7fRErvkiSLIpNWeViovokqdnmVmii6LBJE3u8D8mCcNEmqYzhbnqT2/TiOvX37Js/e6q1Hv4l9LX8+H8IyT++mCbaTK1fHkzccTz7OO8Hveafp550mWM/vct6Zn085cH7ywe3z2JTOY9O7PY/F+50b9vS++PyiP3tfPLm398WiHv15/aTs109Wd7N+gnW2G4p/uR6b3c96rMiv1u2bT9btgztat+8/3zmY989xbn6+I+7t8x18DngLPi++YYrrChhcf3IDrlO6IdqOpCpSXM/2D/11j234yXWPwy+bXOD6WO5rXkc9vdvrqAWut78N/5dx08f/3zF/fvr/7is0+WrQhEMTDk04NOHQhHv4DtcevsE1NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMT7m/cNifkUwM0UQAAAABJRU5ErkJggg==",
];
const images = [
  "https://all.accor.com/magazine/imagerie/greece-51e5.jpg",
  "https://all.accor.com/magazine/imagerie/cambodia-e358.jpg",
  "https://all.accor.com/magazine/imagerie/switzerland-c9d6.jpg",
  "https://all.accor.com/magazine/imagerie/abu-dhabi-8a3e.jpg",
  "https://all.accor.com/magazine/imagerie/spain-2eca.jpg",
  "https://all.accor.com/magazine/imagerie/cairo-sunset-be09.jpg",
  "https://all.accor.com/magazine/imagerie/indonesia-c5ab.jpg",
  "https://all.accor.com/magazine/imagerie/usa-78c8.jpg",
  "https://all.accor.com/magazine/imagerie/dubai-creek-8098.jpg",
  "https://all.accor.com/magazine/imagerie/india-7463.jpg",
];
const para = [
  `The Greek Island of Santorini is covered with picture perfect
  sunset spots, and is known world-over for this. The ragged
  cliff towns, breath-taking views and white-washed architecture
  offers sunset seekers an otherworldly experience while
  enjoying the sunset dusk. Colours range from bright
  rose-tinted pinks to ivory-infused lavender, accentuated by
  the glowing white of the island’s buildings and reflection of
  the Aegean Sea.`,
  `Angkor Wat, the largest religious monument in the world is breath-taking from the moment you reach it. An adventurous choice for many, the cluster of temples involves plenty of climbing and walking. However to truly appreciate the magnificence of the sunset sky against the structure, we would recommend standing near the left end of the garden to see the complete silhouette of the temples against the orange sky. `,
  `The Alpine adventure will never seem to amaze any traveller with stunning views, glimmering natural landscape and exquisite cuisine. For a truly magical experience for sunset seekers, gaze up to the iconic mighty Matterhorn – the symbol of the Alpine region. There are plenty of guided excursions, day trips and meals to choose from and don’t forget to make sure there’s plenty of room in your camera to capture the incredible sunset scene on the mountain. Depending on the time of year, expect to see colours ranging from cotton-candy pinks to rustic orange.`,
  `The capital city of the United Arab Emirates has plenty to offer in terms of culture and luxury destinations. The Shiekh Zayed Grand Mosque in Abu Dhabi is a majestic structure built as a testament to Sheikh Zayed bin Sultan Al Nahyan the first President of the UAE. The bright white marble ensures that the structure can be seen from very far. The mosque is built with a unique lighting system to reflect the phases of the moon. At sunset, the golden gleams from the sun bounce off the marble creating an enchanting atmosphere. Walk around the premises during sunset to explore every feature from the reflecting pools to the lush gardens surrounding the main structure. `,
  `There’s nothing more spectacular than experiencing an authentic Arabian adventure and witnessing the sun set across Cairo in Egypt. There are plenty of spots to choose from around the city and in the desert. One of the most popular choices in Cairo is out at the Pyramids of Giza, with the glowing setting sky as a backdrop. However, many travellers choose to view the sunset amongst camps and camels in the desert as the brown sand appears to glow bright orange in the sunlight. Another option is to get a look from above in any of the top floors of a tall building within the city.`,
  `A perfect melting pot of culture, nightlife, sports and more – Barcelona has something for all. There are plenty of perfect sunset spotting locations around the city, and most travellers prefer to walk around the city in the evenings taking in the culture, sights and sounds along with the setting sun. One of our favourite spots is atop El Carmel Hill which looks down on the colourful Gaudi inspired surroundings. The golden sunset accentuates the colours and hues of the whole area and completely saturates the mood.`,
  `Ocean lovers rejoice because Jimbaran Bay is perfect for everything sea, shore and sunset. The beachfront is lined with a spectacular collection of seafood restaurants giving you the perfect setting to sit-back and relax with your dinner and enjoy the sunset. The sunsets in Bali are slow and beautiful giving you plenty of time to take in every savoury colour and sound as the sun hits the waves.`,
  `Located just off the southern coast of Florida, the tropical Florida Keys is a sunset seeker’s paradise. You can be in any corner and still enjoy the spectacular show. Florida Keys offer sunsets filled with a spectrum of colours from the brightest pinks and reds to deep oranges and purples.`,
  `A local favourite and a tourist bucket list, catching the sunset across the Deira Creek in Dubai is a fantastic experience. Many visitors choose to ride the water taxi – a traditional abra across the creek to take in all the sights and sounds of Old Dubai. The old district still has plenty of life and entertainment and when the sun sets, the golden rays gleam across the water and reflect from the nearby buildings and through fishermen’s nets.`,
  `Truly a world wonder, the white marble of the Taj Mahal shines magically as the suns setting rays coat around it warmly. During the day, the heavily crowded tourist spot gets extremely busy and it would be difficult to enjoy the tranquillity the attraction can truly offer. We recommend starting early in the morning to catch sunrise at the Taj Mahal, or wait till sunset to go across the Yamuna River to Mehtab Bagh where you can enjoy the sunset view in a quieter setting. `,
];
// ---------------------------//
list[0].innerHTML = `<ul class="left"></ul>
                   <div class="desc"></div>
                   <ul class="right"></ul>`;

const listLul = document.querySelector(".left");
const listRul = document.querySelector(".right");

for (var i = 0; i < titles.length; i++) {
  if (i < titles.length / 2) {
    listLul.innerHTML += `<li class="location location${i}">
                            ${titles[i]}<img src="${maps[i]}" alt="">
                          </li>`;
  } else {
    listRul.innerHTML += `<li class="location location${i}">
                           <img src="${maps[i]}" alt=""> ${titles[i]}
                          </li>`;
  }
}

const desc = document.querySelector(".desc");
desc.innerHTML = `<div id=box>
                    <h2 id="title"></h2>
                  <div id="img">
                    <div id="overlay"></div>
                  </div>
                  <p id="para"></p>
              </div>`;

const li = document.getElementsByClassName("location");
const box = document.getElementById("box");
const title = document.getElementById("title");
const img = document.getElementById("img");
const p = document.getElementById("para");

Array.from(li).forEach((l) => {
  l.addEventListener("mouseover", () => {
    box.style.display = "flex";
    box.style.transform = "scale(1)";
    title.innerText = `${titles[eval(l.classList[1][8])]}`;
    img.style.backgroundImage = `url(${images[eval(l.classList[1][8])]})`;
    // img.style.objectFit = "cover";
    p.innerText = `${para[eval(l.classList[1][8])]}`;
  });
  list[0].addEventListener("mouseleave", () => {
    box.style.transform = "scale(0)";
  });
});

// --------Mobile
const mobile = document.getElementsByClassName("mobile");
console.log(mobile);
for (var i = 0; i < 10; i++) {
  mobile[0].innerHTML += `<div id=mobBox>
                        <h2 id="title"> <img src='${maps[i]}'/> ${titles[i]}</h2>
                        <div id="img" style="background-image: url(${images[i]});">
                            <div id="overlay"></div>
                        </div>
                         <p id="para">${para[i]}</p>
                      </div>`;
}
