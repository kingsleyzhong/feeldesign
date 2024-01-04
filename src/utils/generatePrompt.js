export const generatePrompt = ({ image, style, type }) => {
  const prompts = {
    tali8hho2zu34bhgpsta: `ROOM TYPE: ${type} | STYLE: in the style of light pink and dark indigo, caia koopman, woven/perforated, curvaceous simplicity, margaret olley, light black and brown | COMPOSITION: Rule of Thirds | PHOTO TYPE: Interior Design. --v 5.1`,

    yelg1w3kzs3ii9gl9l9r: `ROOM TYPE: ${type} | STYLE:  in the style of woven/perforated, light white and light maroon, architectural interventions, petzval 85mm f/2.2, symmetrical grid, soft and airy compositions, multi-panel compositions | COMPOSITION: Rule of Thirds | PHOTO TYPE: Interior Design. --v 5.1`,

    dsxakki9wi8zsk6mra0t: `ROOM TYPE: ${type} | STYLE: sleek, contemporary, stylish, chic, trendy, wood, iron, bronze, aluminum, anti-matter, dusk, dawn, evening, morning, cozy, illuminated, serene, vibrant, lively, wood, iron, bronze, aluminum, anti-matter, Brick, Bronze, Carbon Fiber, Cardboard, Cellulose, Ceramic, Cotton, Fabric, Fiber Optic, Foil, Gasoline, Glass, Gold, Gummies, Latex, Leather, Magma, Metallic, Nickel, Nylon, Paper, Plastic, Quartz, Shrink Wrap, Skin, Slime, Wooden, Yarn, Zinc, Copper, Plasma, Liquid Ice | COMPOSITION: Rule of Thirds | PHOTO TYPE: Interior Design. --v 5.1`,

    "1d7eafc8e8c466fb05b587297fa04bb1": `ROOM TYPE: ${type} | STYLE: in the style of dark green and dark beige, naturalistic settings, afro-colombian themes, daz3d, naturalistic lighting, lucy glendinning, gray and beige | PHOTO TYPE: Interior Design. --v 5.1`,

    uwdyvimkpvshkazkxjdl: `ROOM TYPE: ${type} | STYLE: dark earthy tones, IT business, open plan office | PHOTO TYPE: Interior Design. --v 5.1`,

    l70vikqbktenu0acsnga: `ROOM TYPE: ${type} | STYLE: Small Luxurious Elegance Studio in Taiwan | | PHOTO TYPE: Interior Design. --v 5.1`,

    r5chygepzrdf12bpfika: `ROOM TYPE: ${type} | STYLE: in the style of emotive lighting, matte drawing, danish design, luminous quality | PHOTO TYPE: Interior Design. --v 5.1`,

    d50c21a6fbc7baa05e167e00e76659cd: `ROOM TYPE: ${type} | STYLE: in the style of michal karcz, dark brown and dark beige, kintsugi, varying wood grains, subtle chiaroscuro, layered veneer panels, juxtaposition of hard and soft lines | PHOTO TYPE: Interior Design. --v 5.1`,

    "179e71556de6df22457bac6a4d8dc6e2": `ROOM TYPE: ${type} | STYLE: in the style of subdued minimalism, uhd image, thin steel forms, dark beige, matte photo, layered translucency, monochromatic shadows | PHOTO TYPE: Interior Design. --v 5.1`,

    "4b81ff29487cd0a1f6855819c34d1873": `ROOM TYPE: ${type} | STYLE:  in the style of light bronze and light beige, ethereal minimalism, varying wood grains, light wood, anamorphic lens, detailed, nature - inspired, beige --v 5.1`,

    "52d50cd11d69797d26aa95eb13592760": `ROOM TYPE: ${type} | STYLE:  a width of three meters. The room boasts a contemporary aesthetic, featuring light - colored wood grain flooring that adds warmth and sophistication to the space. Positioned at the front is a small balcony with a doorway measuring 1. 5 feet wide, seamlessly blending indoor and outdoor living. The interior design showcases a harmonious fusion of sleek furniture, minimalist decor, and clean lines, creating an inviting and modern atmosphere. Step into this well - designed space and immerse yourself in a perfect balance of style and comfort. --v 5.1`,

    f64d2879fd086dcef1df44a9274f51dc: `ROOM TYPE: ${type} | STYLE:   in the style of curved mirrors, vintage minimalism, danish design, light black and brown, tabletop photography, silhouette lighting, traditional craftsmanship. --v 5.1`,

    "3eb33b6b099bb205ac8ecae7677f26a2": `ROOM TYPE: ${type} | STYLE: in the style of zen minimalismdark beige and amber subtle details, asymmetric balance. --v 5.1`,

    "221de2dab343e9434a790d04e75dd0e0": `ROOM TYPE: ${type} | STYLE:  in the style of zen minimalismdark beige and amber subtle details, asymmetric balance, Taiwan | TAGS: functional design, asymmetric balance, comfortable, neon lightin | CAMERA: Nikon Z7 II | FOCAL LENGTH: 50mm | SHOT TYPE: Normal - angle | COMPOSITION: Rule of thirds | LIGHTING: subtle lighting, kintsugi, light amber | MATERIALS: Light wood flooring, beige walls --v 5.1`,

    "65566a2e25d6097e4ee0e18b3ce1f002": `ROOM TYPE: ${type} a white space with turquoise furniture | STYLE: , in the style of dark white and dark azure, modern urban, electric color, monochromatic tones, bauhaus functional design, electric color schemes, living materials | CAMERA: Canon 5D Mark IV | FOCAL LENGTH: 50mm --v 5.1`,

    e8131f0a22493713956519e26e92c2fa: `ROOM TYPE: concrete ${type} | STYLE: in the style of soft, muted palette, mundane materials, atmospheric installations, de stijl, arched doorways, light crimson and gray, minimalist textiles | CAMERA: Canon 5D Mark IV FOCAL LENGTH: 35mm --v 5.1`,

    "1a3000a51c09e4599694e05cf01650e1": `ROOM TYPE: ${type} genesisis, inc | STYLE: in the style of unreal engine 5, art deco sensibilities, environmental awareness, danish golden age, emphasis on nature, bauhaus functional design, neo-geo minimalism | CAMERA: Canon 5D Mark IV --v 5.1`,

    "836ab6282200e5801948d0c2efdd23e6": `ROOM TYPE: ${type} | STYLE: in the style of dark gray and light black, neogeo, captures the essence of nature, rich and immersive, viennese actionism, bright color palettes, minimalist stage designs | CAMERA: Canon 5D Mark IV --v 5.1`,

    f339cb33f1b17e6b4e579d2059a265aa: `ROOM TYPE: ${type} with plants, and a reception area | STYLE: in the style of pointillist compositions, danish golden age, basil gogos, light gray and dark brown, luminous imagery, dark green and dark azure, frantisek kupka | CAMERA: Canon 5D Mark IV --v 5.1`,

    "2445bc3b6ae17cdd86062c4224ac9e69": `ROOM TYPE:a ${type} features soft leather | STYLE: features soft leather seating, in the style of soft, blended brushstrokes, muted colors, light orange and light brown, minimalist staging, life in new york city | CAMERA: Canon 5D Mark IV --v 5.1`,

    "7e1c7ddcbf29407ec0a470012aef88d5": `ROOM TYPE:a ${type} | STYLE: in the style of rich, painterly surfaces, light magenta and red, govaert flinck, japanese contemporary, authentic details, modern and sleek, traditional-modern fusion | CAMERA: Canon 5D Mark IV --v 5.1`,

    "584cf33904b312f2f6a5cbd1a03c8bc6": `ROOM TYPE: a wooden ${type} | STYLE: the interior has wood walls, in the style of strong linear elements, subtle playfulness, sophisticated woodblock, playful color schemes, minimalist detail, dark beige and black, thx sound | CAMERA: Canon 5D Mark IV --v 5.1`,

    "074cb837bf554d7eb451704688c7e5f0": `ROOM TYPE:a ${type} and office sign | STYLE:  in the style of neon installations, soviet avant-garde, industrial-inspired, silhouette lighting, glass as material, spot metering, rounded | CAMERA: Canon 5D Mark IV | CAMERA: Canon 5D Mark IV --v 5.1`,

    cd6e6146d78b421df8976effe357836c: `ROOM TYPE:a ${type} with an orange sofa and two chairs | STYLE: in the style of muted earth tones, life in new york city, minimalist textiles, bronze and beige, minimalist abstracts, polished craftsmanship, clear and crisp | CAMERA: Leica S3 --v 5.1`,

    df0cf936c243954c66f48f4d3778fce7: `ROOM TYPE:a ${type} at le bar at san kala | STYLE: in the style of dark beige and indigo, enigmatic tropics, bentwood, striped, australian tonalism, natural materials, danish design | CAMERA: Leica S3 --v 5.1`,

    "091483349111771fc4b13fee320b892a": `ROOM TYPE: a Modern ${type} with white cabinets and black furniture | STYLE: in the style of soft, muted tones, flowing draperies, moody and atmospheric, flat, gray, luxurious, modular design | CAMERA: Leica S3 --v 5.1`,

    "0593ca5d6476ec9cd13e10d0d2740dcc": `ROOM TYPE: a italo ${type} in a city | STYLE: in the style of layered textures and patterns, moody lighting, sgraffito, tabletop photography, polished concrete, dark white and bronze, pierre roy | CAMERA: Fujifilm GFX 100 --v 5.1`,

    "69f6b3f58e900498ba8234e14ef526f7": `ROOM TYPE: a ${type} interior design by arquitectos m rarchand ir | STYLE: in the style of subtle tonal variations, oriental minimalism, david chipperfield, mix of masculine and feminine elements, beijing east village, layered veneer panels, modernist sensibilities | CAMERA: Leica S3 --v 5.1`,

    c3fe4d8dd46b089ebfb26858c754e2af: `ROOM TYPE: a ${type}| STYLE: in the style of light pink and dark amber, jesper ejsing, bold structural designs, will barnet, captivating lighting, alexander milne calder, danish design | CAMERA: Leica S3 --v 5.1`,

    d2ba527e6b41e34b8758597fb607dace: `ROOM TYPE: a ${type} with modern furniture and bookshelves | STYLE: in the style of nicolas de stael, multidisciplinary, signe vilstrup, stephen ormandy, golden hues, absurdist installations, light brown and white | CAMERA: Leica S3 --v 5.1`,

    e8652fcf2da062c21358a059f8a2034a: `ROOM TYPE: a ${type} with colorful furniture and bookshelves | STYLE: in the style of petzval 85mm f/2.2, arte povera, expansive spaces, large-scale abstractions, light beige and light amber, vibrant postmodernism, lively tableaus | CAMERA: Leica S3 --v 5.1`,

    "49c69c209c4269783904e185798fc6de": `ROOM TYPE: a ${type} in a city with modern furniture | STYLE: in the style of tran nguyen, oscar niemeyer, polished concrete, wifredo lam, cinematic elegance, subdued color palette, high-angle | CAMERA: petzval 85mm f/2.2 --v 5.1`,

    "997bbac78924c9a24cd9e94e4611c558": `ROOM TYPE: a modern ${type} with wooden floors| STYLE: in the style of grandeur of scale, konstantinos parthenis, aron demetz, award winning, light brown and light bronze, rich and immersive, truls espedal | CAMERA: Leica S3 --v 5.1`,

    f994a5208ab9ef71841f84d25c17b8b6: `ROOM TYPE: a ${type} with wood cabinets and lots of neutral brown furniture | STYLE: in the style of densely textured or haptic surface, light magenta and dark beige, mountainous vistas, use of ephemeral materials, linear elegance, precise nautical detail, modular design | CAMERA: Leica S3 --v 5.1`,

    "7acabe36c398f44f2d2fabf89fa9c3ba": `ROOM TYPE: a modern  ${type} blue furniture | STYLE: in the style of minimalist and abstract shapes, large-scale abstraction, subtle pastel tones, large scale murals, danish design, light white and beige, subtle details | CAMERA: Leica S3 --v 5.1`,

    "7dcb840de94939d2815f3b7a8b0798fa": `ROOM TYPE: a modern  ${type}  painting on the wall | STYLE: in the style of bjarke ingels, light beige and azure, color-blocked textiles, asymmetrical balance, subtle details, balanced composition, sculptural aesthetics | CAMERA: Leica S3 --v 5.1`,

    "721ed8a6364722d7cb48dc2a2c3b4597": `ROOM TYPE: a modern wooden  ${type}  in czech republic | STYLE:in the style of tabletop photography, textural and layered, roger de la fresnaye, organic material, studyplace, emek golan, jazzy interiors | CAMERA: Leica S3 --v 5.1`,

    "17116958bda6e24eab7f2dccf51a1077": `ROOM TYPE: a modern wooden  ${type} with wood cabinet | STYLE: in the style of monochrome interiors, anglocore, 32k uhd, sustainable design, maroon and indigo, burne-jones, poured | CAMERA: Leica S3 --v 5.1`,

    "465c3f5bb117a121e45079604f6fa39b": `ROOM TYPE: a ${type}  has hardwood floors, in the style of monolithic structures, light black and red, restored and repurposed, packed with hidden details, neutral color palettes, flat composition, natural light | CAMERA: Leica S3 --v 5.1`,

    e01e7f69667ccb8148d48fcb7609609d: `ROOM TYPE: a white ${type}  with a tiled floor, in the style of mesoamerican influences, muted hues, dansaekhwa, eco-friendly craftsmanship, stenciled iconography | CAMERA: Leica S3 --v 5.1`,

    "964c07d492f1d3c07e4a6832dff4a3f7": `ROOM TYPE: an open ${type}  wooden beams and tile flooring, CAMERA: in the style of clara ledesma, bold geometric minimalism, cambodian art, patterned surfaces, stenciled iconography, flat and bold, minimalist features | CAMERA: Leica S3 --v 5.1`,

    b29cd94746f0a7bd926f56c50a385636: `ROOM TYPE: a ${type} in the style of packed with hidden details, brutalist, harmony with nature, wood, lively tableaus, high quality photo | CAMERA: Leica S3 --v 5.1`,

    "0badab3071c189a4fb280ccdb6580929": `ROOM TYPE: a ${type}  is decorated with the blue ocean, in the style of modernist illustrations, layered veneer panels, soft, muted palette, organic shapes and curved lines, oku art, restored and repurposed, playful minimalism | CAMERA: Leica S3 --v 5.1`,

    "9db616fa8a25e81165ca47f09fa40f82": `ROOM TYPE: a ${type} at senay st |  STYLE: in the style of dark and brooding designer, nadav kander, rustic futurism, rounded shapes, metallic rotation, sunrays shine upon it, exquisite craftsmanship| CAMERA: Leica S3 --v 5.1 `,

    "011b1194d897eed66e6f75494d3e67d9": `ROOM TYPE: a ${type} |  STYLE: in the style of realistic chiaroscuro lighting, mori kei, soft renderings, northern china's terrain, terracotta, minimalist starkness, dark gray and beige | CAMERA: Leica S3 --v 5.1`,

    "30c41ea30bb1434279d2843d30e0d8aa": `ROOM TYPE: a modern ${type} |  STYLE: in the style of qiu shengxian, realistic chiaroscuro, monolithic structures, nicolas bruno, terracotta, subtle lighting, jean restout the younger | CAMERA: Leica S3 --v 5.1`,

    "46c281111b6f1acd83f15651092c911f": `ROOM TYPE: a ${type} |  STYLE: in the style of juxtaposition of hard and soft lines, minimalist nature studies, textural layers, unprimed canvas, earthy palette, expansive spaces, light brown and white | CAMERA: Leica S3 --v 5.1`,

    c06d2b535f829d39e9804c995c3932a2: `ROOM TYPE: a modern ${type} with books | STYLE: in the style of concrete brutalism, fernando botero, mundane materials, subtle details, electric color schemes, david chipperfield, lively tableaus | CAMERA: Leica S3 --v 5.1`,

    "9f0f30a5b4a4486753dab07e58e34105": `ROOM TYPE: an elegant ${type} green walls in a home | STYLE: in the style of russell dongjun lu, serene oceanic vistas, american barbizon school, concrete, candid, fine line details, mark arian | CAMERA: Leica S3 --v 5.1`,

    acd3d7601df1cf5153ed779a441d3617: `ROOM TYPE: a ${type}  | STYLE:  in the style of minimalist pen lines, calligraphy-inspired, subtle lighting, beijing east village, light red and beige, design by architects, modular construction | CAMERA: Leica S3 --v 5.1`,

    "80689c88b41cf819833a2eee02eae963": `ROOM TYPE: a ${type} carrol martelo architecturo | STYLE: in the style of maximalism, 32k uhd, polished craftsmanship, dark beige | CAMERA: Leica S3 --v 5.1`,

    "0247d680cbe1e382dc2451f4b5b5297f": `ROOM TYPE: a ${type} with wooden floors and black shelves | STYLE:  in the style of tomàs barceló, tapestry-like, design by architects, hybrid of contemporary and traditional, warm color palettes, polished craftsmanship, osgemeos | CAMERA: Leica S3 --v 5.1`,

    "9716c346b629a042c6650460e8bb62ad": `ROOM TYPE: a ${type} with black shelving, | STYLE:  in the style of rich tapestries of color, wood, anamorphic art, swiss style, modern, exquisite craftsmanship, captivating | CAMERA: Leica S3 --v 5.1`,

    "3fe6da0209792b6421fe4db5874d58de": `ROOM TYPE: a ${type} by sos de agencia de arquitectos, | STYLE: in the style of timber frame construction, rich and immersive, luxurious opulence, candido portinari | CAMERA: Leica S3 --v 5.1`,

    "8f848f523b6d63cb60d0af747c3f7879": `ROOM TYPE: a ${type} by rosa hudson, | STYLE: in the style of architectural transformations, authentic details, cildo meireles, flowing draperies, neutral color palette, light brown and black, camille vivier | CAMERA: Leica S3 --v 5.1`,

    "553eb9d49abf76c4de7f5845c9754423": `ROOM TYPE: a paris ${type} | designatelier 4 | STYLE: in the style of leica cl, use of earth tones | CAMERA: Leica S3 --v 5.1`,

    "6afeaeeca8a973467ef8939e40d91a69": `ROOM TYPE: a ${type} by robne, cologne / beuverie boutique / paris | STYLE: in the style of dark black and brown, hasselblad h6d-400c, beijing east village, the aesthetic movement, tondo, lively tableaus, swiss style | CAMERA: Fujifilm GFX 100 | CAMERA: Leica --v 5.1`,

    "7e96118907a4fab71600511352cba67d": `ROOM TYPE: a ${type} with wood | STYLE: in the style of conceptual minimalism, andrzej sykut, minimal lines, chiaroscuro lighting, light red and light green, juxtaposition of hard and soft lines, design by architects | CAMERA: Fujifilm GFX 100 --v 5.1`,

    "19144d4338a6bf1cac43235e94ae8269": `ROOM TYPE: a modern ${type} wall white tv ikea for modern wall ideas | STYLE: in the style of soft edges and blurred details, moody chiaroscuro lighting, 32k uhd, light bronze and gray, uhd image, casts of spaces, li shuxing | CAMERA: Fujifilm GFX 100 --v 5.1`,

    "0c5def3c7be5bdccc0c4878b4d6c466e": `ROOM TYPE: a modern ${type} with artistic abstract paintings, a lamp and grey floor | STYLE: in the style of dark beige and crimson, rendered in cinema4d, subtle minimalism, dark bronze and dark black, neon color palette, luxurious, contemporary candy-coated | CAMERA: Leica S3 --v 5.1`,

    e41960fcfe3d6efc1788f8d8faccd433: `ROOM TYPE: a ${type} with wooden floors, in the style of 32k UHD, organic stone carvings, engineering/construction and design, glazed surfaces, stripes and shapes, functional aesthetics, architectural interventions | CAMERA: Leica S3 | COMPOSITION: from a corner --v 5.1`,

    "50ecc45ee480b09793f07f91cb96c5fc": `ROOM TYPE: a esidential ${type} decoration, in the style of realistic and hyper-detailed renderings, light brown and white, james ensor, use of screen tones, kintsugi, afro-caribbean influence, layered translucency | CAMERA: Leica S3 --v 5.1`,

    ec850535d15c9faff35e800850cf7e4f: `ROOM TYPE: design by real estate for the interior of the ${type} | STYLE: in the style of packed with hidden details, muted and subtle tones, subtle shading, cartoonish simplicity, natural lighting, minimalist brush work, layered veneer panels | CAMERA: Leica S3 --v 5.1`,

    aaf63aacb9c96a0541096410e4ac43ac: `ROOM TYPE: ${type} is located in a modern apartment | STYLE: in the style of dark black and dark beige, dark green and dark gray, tondo, cartoonish simplicity, subtle tonal shifts, crisp and clean look, subtle colours | CAMERA: Leica S3 --v 5.1`,

    "4db7a05ec2788e72ce651260d9c77f56": `ROOM TYPE: ${type} is located in a modern apartment | STYLE: in the style of dark black and dark beige, dark green and dark gray, tondo, cartoonish simplicity, subtle tonal shifts, crisp and clean look, subtle colours | CAMERA: Leica S3 --v 5.1`,

    f6062c5bb360c6f62bf97cde8bf99224: `ROOM TYPE: an artist rendering of an ${type} | STYLE: in the style of light black and black, chuah thean teng, subtle colours, tondo, precise and lifelike, organic contours, contemporary diy | CAMERA: Leica S3 --v 5.1`,

    "68d06aef0f84a4ba615de1d24516e4b0": `ROOM TYPE: the interior of an industrial ${type} is decorated with plants | STYLE: in the style of light gray and dark black, architectural grids, salon kei, architectural transformations, organic stone carvings, light yellow and dark green, clean-lined | CAMERA: Fujifilm GFX 100 --v 5.1`,

    "71acd4ced8b0c79cd2efaf16053ffc03": `ROOM TYPE: a concrete ${type} with tables and plants| STYLE: in the style of black and gray, passage, architectural grids, salon kei, rusticcore, green and gray, crisp and delicate | CAMERA: Fujifilm GFX 100 --v 5.1`,

    "9ba71bc3cc07d9ab59869d88993a9515": `ROOM TYPE: open and inviting ${type} with wooden tables and green plants | STYLE: in the style of dao trong le, hikecore, streetscape, structural symmetry, cildo meireles, pretty, tropical landscapes | CAMERA: Fujifilm GFX 100 --v 5.1`,
  };

  return `${image}, ${prompts[style.name]}`;
};
