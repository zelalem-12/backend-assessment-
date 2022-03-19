const questions = {
  range: "Questions!A1:F1000",
  majorDimension: "ROWS",
  values: [
    [
      "Question number",
      "Annotation 1",
      "Annotation 2",
      "Annotation 3",
      "Annotation 4",
      "Annotation 5",
    ],
    [
      "1",
      "Define diffusion and describe its role in nutrient uptake and gaseous exchange in plants and humans",
      "Define active transport and discuss its importance as an energy-consuming process by which substances are transported against a concentration gradient, as in ion uptake by root hairs and uptake of glucose by cells in the villi",
      "Define homeostasis as the maintenance of a constant internal environment",
    ],
    [
      "2",
      "Golgi body ",
      "Reducing sugars (Benedict's solution)",
      "Explain how energy losses occur along food chains, and discuss the efficiency of energy transfer between trophic levels",
      "Explain what is meant by an endocrine gland, with reference to the islets of Langerhans in the pancreas",
    ],
    [
      "3",
      "Explain the basic principles of homeostasis in terms of stimulus resulting from a change in the internal environment, a corrective mechanism and negative feedback",
      "Compare the structure of typical animal and plant cells",
      "Identify, with the aid of diagrams, the main stages of mitosis",
      "Briefly describe the menstrual cycle with reference to the alternation of menstruation and ovulation, the natural variation in its length, and the fertile and infertile phases of the cycle with reference to the effects of progesterone and estrogen only",
      "State the structure of DNA in terms of the bases, sugar and phosphate groups found in each of their nucleotides ",
    ],
    [
      "4",
      "Define and state the equation, in words only, for anaerobic respiration in humans",
      "Briefly explain how a gene that controls the production of human insulin can be inserted into bacterial DNA to produce human insulin in medical biotechnology ",
      "Describe the transfer of materials between capillaries and tissue fluid",
    ],
    [
      "5",
      "State the roles of water in living organisms",
      "Explain the mode of action of enzymes in terms of an active site, enzyme-substrate complex, lowering of activation energy and enzyme specificity",
    ],
    [
      "6",
      "State the function of the hepatic portal vein as the transport of blood rich in absorbed nutrients from the small intestine to the liver",
      "Describe peristalsis in terms of rhythmic wave-like contractions of the muscles to mix and propel the contents of the alimentary canal",
    ],
    [
      "7",
      "Use a hand lens to identify and describe the stamens and stigmas of one, locally available, named, wind-pollinated flower, and examine the pollen grains using a microscope",
      "State the functions of the amniotic sac and the amniotic fluid",
      "Cell surface membrane",
      "Conduction and support – xylem vessels",
    ],
    ["8", "Cytoplasm"],
    [
      "9",
      "Lipids such as fats from glycerol and fatty acids",
      "Distribution of chloroplasts in photosynthesis ",
    ],
    ["10", "Explain enzyme action in terms of the ‘lock and key’ hypothesis"],
    ["11", "Mitochondria"],
    [
      "12",
      "State the functions of the amniotic sac and the amniotic fluid",
      "Outline the pathway by which water is transported from the roots to the leaves through the xylem vessels",
    ],
    [
      "13",
      "Define diffusion and describe its role in nutrient uptake and gaseous exchange in plants and humans",
    ],
    [
      "14",
      "Explain why observed ratios often differ from expected ratios, especially when there are small numbers of progeny ",
      "Proteins",
    ],
    [
      "15",
      "Discuss the spread of human immunodeficiency virus (HIV) and methods by which it may be controlled",
      "Explain how the blood glucose concentration is regulated by insulin and glucagon as a homeostatic mechanism ",
      "Describe the structure of the eye as seen in front view and in horizontal section",
      "Describe the role of cilia, diaphragm, ribs and intercostal muscles in breathing",
      "Chloroplasts",
    ],
    [
      "16",
      "Pollution due to insecticides including bioaccumulation up food chains and impact on top carnivores",
    ],
    [
      "17",
      "Describe the maintenance of a constant body temperature in humans in terms of insulation and the role of: temperature receptors in the skin, sweating, shivering, blood vessels near the skin surface and the co-ordinating role of the hypothalamus",
    ],
    [
      "18",
      "Explain the terms producer, consumer and trophic level in the context of food chains and food webs ",
    ],
    [
      "19",
      "State the relationship between receptors, the central nervous system and the effectors ",
      "Nucleus",
      "Explain enzyme action in terms of the ‘lock and key’ hypothesis",
    ],
    [
      "20",
      "Protein (biuret test)",
      "Starch (iodine in potassium iodide solution)",
      "Describe the signs, such as an increased blood glucose level and glucose in urine, and the treatment of diabetes mellitus using insulin",
      "Explain that genes may be transferred between cells. Reference should be made to the transfer of genes between organisms of the same species or different species – transgenic plants or animals ",
    ],
    ["21", "Cytoplasm"],
    [
      "22",
      "Define and state the equation, in words and symbols, for aerobic respiration in humans",
    ],
    [
      "23",
      "Briefly describe the non-cyclical nature of energy flow",
      "Describe the structure of the eye as seen in front view and in horizontal section",
      "Nucleus",
      "Describe the functions of main regions of the alimentary canal and the associated organs: mouth, salivary glands, oesophagus, stomach, duodenum, pancreas, gall bladder, liver, ileum, colon, rectum, anus, in relation to ingestion, digestion, absorption, assimilation and egestion of food, as appropriate",
      "Define and state the equation, in words only, for anaerobic respiration in humans",
    ],
    [
      "24",
      "Explain how the blood glucose concentration is regulated by insulin and glucagon as a homeostatic mechanism ",
      "Explain the movement of water between plant cells, and between them and the environment in\nterms of water potential (calculations on water potential are not required)",
      "Protein (biuret test)",
    ],
    [
      "25",
      "Briefly describe the menstrual cycle with reference to the alternation of menstruation and ovulation, the natural variation in its length, and the fertile and infertile phases of the cycle with reference to the effects of progesterone and estrogen only",
      "Briefly describe the menstrual cycle with reference to the alternation of menstruation and ovulation, the natural variation in its length, and the fertile and infertile phases of the cycle with reference to the effects of progesterone and estrogen only",
      "Breakdown of red blood cells",
    ],
    [
      "26",
      "Polypeptides and proteins from amino acids",
      "Water pollution by sewage and by inorganic waste ",
    ],
    [
      "27",
      "Outline the role of anti-diuretic hormone (ADH) in osmoregulation ",
      "Describe the structure and function of the heart in terms of muscular contraction and the working of valves",
      "Use genetic diagrams to solve problems involving monohybrid inheritance (genetic diagrams involving autosomal linkage or epistasis are not required) ",
    ],
    [
      "28",
      "State the characteristics of, and describe the role of, the exchange surface of the alveoli in gas exchange",
    ],
    [
      "29",
      "Define sexual reproduction as the process involving the fusion of nuclei to form a zygote and the production of genetically dissimilar offspring",
    ],
    [
      "30",
      "State the relationship between receptors, the central nervous system and the effectors ",
    ],
    [
      "31",
      "Outline the relationship between DNA, genes and chromosomes",
      "Explain why observed ratios often differ from expected ratios, especially when there are small numbers of progeny ",
      "Red blood cells – haemoglobin and oxygen transport ",
      "Define and state the equation, in words only, for anaerobic respiration in humans",
    ],
    [
      "32",
      "Predict the results of simple crosses with expected ratios of 3:1 and 1:1, using the terms homozygous, heterozygous, F1 generation and F2 generation ",
    ],
    [
      "33",
      "Explain the mode of action of enzymes in terms of an active site, enzyme-substrate complex, lowering of activation energy and enzyme specificity",
    ],
    [
      "34",
      "State that each gene is a sequence of nucleotides, as part of a DNA molecule ",
      "Breakdown of red blood cells",
    ],
    [
      "35",
      "Describe the structure of the eye as seen in front view and in horizontal section",
    ],
    [
      "36",
      "Describe mutation as a change in the structure of a gene such as in sickle cell anaemia, or in the chromosome number, such as the 47 chromosomes in the condition known as Down syndrome",
    ],
    [
      "37",
      "Describe the maintenance of a constant body temperature in humans in terms of insulation and the role of: temperature receptors in the skin, sweating, shivering, blood vessels near the skin surface and the co-ordinating role of the hypothalamus",
      "Compare, using fresh specimens, an insect-pollinated and a wind-pollinated flower",
      "Identify the positions and explain the functions of xylem vessels, phloem (sieve tube elements and companion cells) in sections of a herbaceous dicotyledonous leaf and stem, using the light microscope",
      "Name radiation and chemicals as factors which may increase the rate of mutation",
      "Carbohydrates",
    ],
    [
      "38",
      "Polypeptides and proteins from amino acids",
      "Explain the mode of action of enzymes in terms of an active site, enzyme-substrate complex, lowering of activation energy and enzyme specificity",
    ],
    [
      "39",
      "Describe the role of cilia, diaphragm, ribs and intercostal muscles in breathing",
    ],
    [
      "40",
      "Define diffusion and describe its role in nutrient uptake and gaseous exchange in plants and humans",
    ],
    [
      "41",
      "Endoplasmic reticulum",
      "Define asexual reproduction as the process resulting in the production of genetically identical offspring from one parent ",
    ],
    [
      "42",
      "Discuss the social and ethical implications of genetic engineering, with reference to a named example ",
    ],
    [
      "43",
      "Explain that genes may be transferred between cells. Reference should be made to the transfer of genes between organisms of the same species or different species – transgenic plants or animals ",
    ],
    [
      "44",
      "State that each gene is a sequence of nucleotides, as part of a DNA molecule ",
    ],
    [
      "45",
      "Endoplasmic reticulum",
      "Glycogen from glucose",
      "State the functions of the amniotic sac and the amniotic fluid",
      "Glycogen from glucose",
    ],
    ["46", "Breakdown of alcohol"],
    [
      "47",
      "Describe the structure of a villus and its role, including the role of capillaries and lacteals in absorption",
    ],
    [
      "48",
      "Chloroplasts",
      "Give examples of artificial selection such as in the production of economically important plants and animals",
      "Define sexual reproduction as the process involving the fusion of nuclei to form a zygote and the production of genetically dissimilar offspring",
    ],
    [
      "49",
      "Identify on diagrams, the male reproductive system and give the functions of: testes, scrotum, sperm ducts, prostate gland, urethra and penis",
      "Predict the results of simple crosses with expected ratios of 3:1 and 1:1, using the terms homozygous, heterozygous, F1 generation and F2 generation ",
    ],
    ["50", "Nucleus"],
    [
      "51",
      "Outline the function of the nephron with reference to ultra-filtration and selective reabsorption in the production of urine",
      "Explain the terms dominant, recessive, codominant, homozygous, heterozygous, phenotype and genotype ",
    ],
    [
      "52",
      "Give examples of environmental factors that act as forces of natural selection ",
      "Compare, using fresh specimens, an insect-pollinated and a wind-pollinated flower",
    ],
    [
      "53",
      "State the relationship between receptors, the central nervous system and the effectors ",
      "Use a hand lens to identify and describe the stamens and stigmas of one, locally available, named, wind-pollinated flower, and examine the pollen grains using a microscope",
    ],
    [
      "54",
      "Use a hand lens to identify and describe the stamens and stigmas of one, locally available, named, wind-pollinated flower, and examine the pollen grains using a microscope",
    ],
    [
      "55",
      "Explain the basic principles of homeostasis in terms of stimulus resulting from a change in the internal environment, a corrective mechanism and negative feedback",
      "Explain enzyme action in terms of the ‘lock and key’ hypothesis",
    ],
    [
      "56",
      "Distribution of chloroplasts in photosynthesis ",
      "Describe the function of the placenta and umbilical cord in relation to exchange of dissolved nutrients, gases and excretory products (structural details are not required)",
      "Reducing sugars (Benedict's solution)",
      "Transport of oxygen – red blood cells",
      "Describe the function of the placenta and umbilical cord in relation to exchange of dissolved nutrients, gases and excretory products (structural details are not required)",
    ],
    [
      "57",
      "Explain how energy losses occur along food chains, and discuss the efficiency of energy transfer between trophic levels",
    ],
    [
      "58",
      "Define sexual reproduction as the process involving the fusion of nuclei to form a zygote and the production of genetically dissimilar offspring",
      "Briefly explain how a gene that controls the production of human insulin can be inserted into bacterial DNA to produce human insulin in medical biotechnology ",
      "Define excretion and explain the importance of removing nitrogenous and other compounds from the body",
      "Explain how the blood glucose concentration is regulated by insulin and glucagon as a homeostatic mechanism ",
    ],
    [
      "59",
      "State that each gene is a sequence of nucleotides, as part of a DNA molecule ",
      "Describe the functions of enzymes (e.g. amylase, maltase, protease, lipase) in digestion, listing the substrates and end-products",
      "Mitochondria",
    ],
    [
      "60",
      "Describe the functions of main regions of the alimentary canal and the associated organs: mouth, salivary glands, oesophagus, stomach, duodenum, pancreas, gall bladder, liver, ileum, colon, rectum, anus, in relation to ingestion, digestion, absorption, assimilation and egestion of food, as appropriate",
    ],
    [
      "61",
      "Fats",
      "Platelets – fibrinogen to fibrin, causing clotting",
      "Define and state the equation, in words only, for anaerobic respiration in humans",
      "Define diffusion and describe its role in nutrient uptake and gaseous exchange in plants and humans",
    ],
    [
      "62",
      "Describe the structure of a villus and its role, including the role of capillaries and lacteals in absorption",
    ],
    ["63", "Breakdown of alcohol"],
    [
      "64",
      "Outline the role of anti-diuretic hormone (ADH) in osmoregulation ",
      "Polypeptides and proteins from amino acids",
      "Nucleus",
    ],
    [
      "65",
      "Identify on diagrams, the female reproductive system and give the functions of: ovaries, oviducts, uterus, cervix and vagina ",
      "State the functions of the sepals, petals, anthers and carpels ",
    ],
    [
      "66",
      "Describe how carbon is cycled within an ecosystem and outline the role of forests and oceans as carbon sinks",
      "Describe how carbon is cycled within an ecosystem and outline the role of forests and oceans as carbon sinks",
      "State the roles of water in living organisms",
      "Cell surface membrane",
      "State the equation, in words and symbols, for photosynthesis",
    ],
    [
      "67",
      "Explain the mode of action of enzymes in terms of an active site, enzyme-substrate complex, lowering of activation energy and enzyme specificity",
    ],
    [
      "68",
      "Relate the structure of arteries, veins and capillaries to their functions",
    ],
    [
      "69",
      "Discuss the social and ethical implications of genetic engineering, with reference to a named example ",
      "Outline the process of pollination and distinguish between self-pollination and cross-pollination",
    ],
    [
      "70",
      "Explain the terms producer, consumer and trophic level in the context of food chains and food webs ",
      "Identify, with the aid of diagrams, the main stages of meiosis (names of the sub-divisions of prophase are not required) ",
    ],
    [
      "71",
      "Identify on diagrams and name the larynx, trachea, bronchi, bronchioles, alveoli and associated capillaries",
    ],
    [
      "72",
      "Explain that genes may be transferred between cells. Reference should be made to the transfer of genes between organisms of the same species or different species – transgenic plants or animals ",
    ],
    [
      "73",
      "Use a hand lens to identify and describe the stamens and stigmas of one, locally available, named, wind-pollinated flower, and examine the pollen grains using a microscope",
      "Plasma – transport of blood cells, ions, soluble food substances, hormones, carbon dioxide, urea, vitamins, plasma proteins",
      "State that each gene is a sequence of nucleotides, as part of a DNA molecule ",
      "Define and state the equation, in words only, for anaerobic respiration in humans",
    ],
    [
      "74",
      "Outline the cardiac cycle in terms of what happens during systole and diastole (histology of the heart muscle, names of nerves and transmitter substances are not required)",
    ],
    [
      "75",
      "Describe how carbon is cycled within an ecosystem and outline the role of forests and oceans as carbon sinks",
      "Discuss the function of the brain and spinal cord in producing a co-ordinated response as a result of a specific stimulus in a reflex action",
    ],
    ["76", "Cytoplasm", "Lipids such as fats from glycerol and fatty acids"],
    [
      "77",
      "Explain enzyme action in terms of the ‘lock and key’ hypothesis",
      "Name radiation and chemicals as factors which may increase the rate of mutation",
    ],
    ["78", "Vascular bundles in transport", "Protein (biuret test)"],
    [
      "79",
      "Outline the relationship between DNA, genes and chromosomes",
      "Describe and interpret pyramids of numbers and biomass ",
    ],
    [
      "80",
      "State the function of the hepatic portal vein as the transport of blood rich in absorbed nutrients from the small intestine to the liver",
      "Discuss the social and ethical implications of genetic engineering, with reference to a named example ",
    ],
    [
      "81",
      "Name radiation and chemicals as factors which may increase the rate of mutation",
    ],
    [
      "82",
      "Describe the effects of excessive consumption of alcohol: reduced self-control, depressant, effect on reaction times, damage to liver and social implications",
      "Compare the structure of typical animal and plant cells",
    ],
    [
      "83",
      "Outline the mechanism of dialysis in the case of kidney failure",
      "Briefly describe the non-cyclical nature of energy flow",
      "Cytoplasm",
    ],
    ["84", "Stomata and mesophyll cells in gaseous exchange"],
    [
      "85",
      "Describe the determination of sex in humans – XX and XY chromosomes ",
    ],
    [
      "86",
      "State the importance of mitosis in growth, repair and asexual reproduction",
      "Describe and interpret pyramids of numbers and biomass ",
    ],
    [
      "87",
      "State how meiosis and fertilisation can lead to variation",
      "How wilting occurs",
      "Identify on a diagram of the skin: hairs, sweat glands, temperature receptors, blood vessels and fatty tissue",
      "Chloroplasts",
      "Give examples of artificial selection such as in the production of economically important plants and animals",
    ],
    [
      "88",
      "Identify on diagrams and name the larynx, trachea, bronchi, bronchioles, alveoli and associated capillaries",
    ],
    [
      "89",
      "State the function of the hepatic portal vein as the transport of blood rich in absorbed nutrients from the small intestine to the liver",
      "Describe the structure and function of the heart in terms of muscular contraction and the working of valves",
      "State how meiosis and fertilisation can lead to variation",
      "Identify, with the aid of diagrams, the main stages of meiosis (names of the sub-divisions of prophase are not required) ",
    ],
    [
      "90",
      "Describe the functions of main regions of the alimentary canal and the associated organs: mouth, salivary glands, oesophagus, stomach, duodenum, pancreas, gall bladder, liver, ileum, colon, rectum, anus, in relation to ingestion, digestion, absorption, assimilation and egestion of food, as appropriate",
    ],
    ["91", "State the functions of the sepals, petals, anthers and carpels "],
    [
      "92",
      "State the importance of mitosis in growth, repair and asexual reproduction",
      "State the importance of mitosis in growth, repair and asexual reproduction",
      "Outline the functions of sensory neurones, relay neurones and motor neurones ",
      "Proteins",
      "Define a hormone as a chemical substance, produced by a gland, carried by the blood, which alters the activity of one or more specific target organs and is then destroyed by the liver ",
    ],
    ["93", "Describe and interpret pyramids of numbers and biomass "],
    [
      "94",
      "State the functions of the membrane systems and organelles identified above",
    ],
    [
      "95",
      "Plasma – transport of blood cells, ions, soluble food substances, hormones, carbon dioxide, urea, vitamins, plasma proteins",
    ],
    ["96", "Ribosomes"],
    [
      "97",
      "State the principal functions of component parts of the eye in producing a focused image of near and distant objects on the retina ",
      "White blood cells – phagocytosis, antibody formation and tissue rejection",
    ],
    [
      "98",
      "Give examples of artificial selection such as in the production of economically important plants and animals",
    ],
    [
      "99",
      "Briefly explain how a gene that controls the production of human insulin can be inserted into bacterial DNA to produce human insulin in medical biotechnology ",
    ],
    ["100", "Endoplasmic reticulum"],
    [
      "101",
      "Explain the need for the production of genetically identical cells",
      "Describe the effect of lactic acid in muscles during exercise",
    ],
    [
      "102",
      "Pollution due to insecticides including bioaccumulation up food chains and impact on top carnivores",
    ],
    [
      "103",
      "Discuss the social and ethical implications of genetic engineering, with reference to a named example ",
      "Give examples of environmental factors that act as forces of natural selection ",
    ],
    [
      "104",
      "Outline the cardiac cycle in terms of what happens during systole and diastole (histology of the heart muscle, names of nerves and transmitter substances are not required)",
    ],
    [
      "105",
      "State that each gene is a sequence of nucleotides, as part of a DNA molecule ",
      "Absorption – root hair cells",
    ],
    [
      "106",
      "Name radiation and chemicals as factors which may increase the rate of mutation",
      "Outline the pathway by which water is transported from the roots to the leaves through the xylem vessels",
      "Explain what is meant by an endocrine gland, with reference to the islets of Langerhans in the pancreas",
      "Define asexual reproduction as the process resulting in the production of genetically identical offspring from one parent ",
      "Identify on diagrams, the female reproductive system and give the functions of: ovaries, oviducts, uterus, cervix and vagina ",
    ],
    [
      "107",
      "Describe the role of cilia, diaphragm, ribs and intercostal muscles in breathing",
      "Investigate and discuss the effects of varying light intensity, carbon dioxide concentration and temperature on the rate of photosynthesis (e.g. in submerged aquatic plant)",
      "Explain how the blood glucose concentration is regulated by insulin and glucagon as a homeostatic mechanism ",
      "Outline the relationship between DNA, genes and chromosomes",
      "Fats (ethanol emulsion)",
    ],
    [
      "108",
      "Identify on diagrams and name the larynx, trachea, bronchi, bronchioles, alveoli and associated capillaries",
      "Identify on diagrams and name the larynx, trachea, bronchi, bronchioles, alveoli and associated capillaries",
    ],
    [
      "109",
      "State the equation, in words and symbols, for photosynthesis",
      "Identify and draw, using a hand lens if necessary, the sepals, petals, stamens and carpels of one, locally available, named, insect-pollinated, dicotyledonous flower, and examine the pollen grains using a microscope ",
      "Compare, using fresh specimens, an insect-pollinated and a wind-pollinated flower",
      "Describe the determination of sex in humans – XX and XY chromosomes ",
      "Identify the positions and explain the functions of xylem vessels, phloem (sieve tube elements and companion cells) in sections of a herbaceous dicotyledonous leaf and stem, using the light microscope",
    ],
    [
      "110",
      "Describe the removal of carbon dioxide from the lungs, including the role of the carbonic anhydrase enzyme",
      "State the function of the hepatic portal vein as the transport of blood rich in absorbed nutrients from the small intestine to the liver",
    ],
    [
      "111",
      "Outline the pathway by which water is transported from the roots to the leaves through the xylem vessels",
      "Carbohydrates",
      "Describe the effect of lactic acid in muscles during exercise",
      "Relate the structure of arteries, veins and capillaries to their functions",
      "Water pollution by sewage and by inorganic waste ",
    ],
    ["112", "Glycogen from glucose"],
    [
      "113",
      "Describe how carbon is cycled within an ecosystem and outline the role of forests and oceans as carbon sinks",
    ],
    [
      "114",
      "Outline the function of the nephron with reference to ultra-filtration and selective reabsorption in the production of urine",
    ],
    ["115", "Nucleus"],
    [
      "116",
      "Carbohydrates",
      "Give examples of environmental factors that act as forces of natural selection ",
    ],
    [
      "117",
      "Describe the determination of sex in humans – XX and XY chromosomes ",
      "Describe the transfer of materials between capillaries and tissue fluid",
      "Conduction and support – xylem vessels",
      "Describe the determination of sex in humans – XX and XY chromosomes ",
      "White blood cells – phagocytosis, antibody formation and tissue rejection",
    ],
    [
      "118",
      "Ribosomes",
      "Plasma – transport of blood cells, ions, soluble food substances, hormones, carbon dioxide, urea, vitamins, plasma proteins",
      "Cell vacuoles (large, sap-filled in plant cells, small, temporary in animal cells)",
      "Define homeostasis as the maintenance of a constant internal environment",
      "Water pollution by sewage and by inorganic waste ",
    ],
    [
      "119",
      "Discuss light intensity, carbon dioxide concentration and temperature as limiting factors on the rate of photosynthesis",
      "Outline the role of anti-diuretic hormone (ADH) in osmoregulation ",
    ],
    [
      "120",
      "Identify, with the aid of diagrams, the main stages of mitosis",
      "Protein (biuret test)",
      "Explain the mode of action of enzymes in terms of an active site, enzyme-substrate complex, lowering of activation energy and enzyme specificity",
      "Fats",
      "Outline the function of the nephron with reference to ultra-filtration and selective reabsorption in the production of urine",
    ],
    [
      "121",
      "Define homeostasis as the maintenance of a constant internal environment",
      "Plasma – transport of blood cells, ions, soluble food substances, hormones, carbon dioxide, urea, vitamins, plasma proteins",
      "State the importance of mitosis in growth, repair and asexual reproduction",
      "Ribosomes",
      "Explain the terms producer, consumer and trophic level in the context of food chains and food webs ",
    ],
    [
      "122",
      "State the characteristics of, and describe the role of, the exchange surface of the alveoli in gas exchange",
      "Outline the role of anti-diuretic hormone (ADH) in osmoregulation ",
      "Discuss the function of the brain and spinal cord in producing a co-ordinated response as a result of a specific stimulus in a reflex action",
      "State that chlorophyll traps light energy and converts it into chemical energy for the formation of carbohydrates and their subsequent uses",
      "Identify on diagrams, the male reproductive system and give the functions of: testes, scrotum, sperm ducts, prostate gland, urethra and penis",
    ],
    [
      "123",
      "Golgi body ",
      "Fat digestion",
      "Describe the effect of lactic acid in muscles during exercise",
      "Describe the difference between continuous and discontinuous variation and give examples of each ",
      "Describe the removal of carbon dioxide from the lungs, including the role of the carbonic anhydrase enzyme",
    ],
    [
      "124",
      "Discuss the social and ethical implications of genetic engineering, with reference to a named example ",
    ],
    [
      "125",
      "Explain the need for the production of genetically identical cells",
      "Describe the structure of the eye as seen in front view and in horizontal section",
      "Describe the effects of excessive consumption of alcohol: reduced self-control, depressant, effect on reaction times, damage to liver and social implications",
      "Describe fertilisation and early development of the zygote simply in terms of the formation of a ball of cells which becomes implanted in the wall of the uterus",
    ],
    [
      "126",
      "Outline the cardiac cycle in terms of what happens during systole and diastole (histology of the heart muscle, names of nerves and transmitter substances are not required)",
      "State that DNA is used to carry the genetic code, which is used to synthesise specific polypeptides (details of transcription and translation are not required)",
    ],
    [
      "127",
      "How wilting occurs",
      "White blood cells – phagocytosis, antibody formation and tissue rejection",
      "Explain enzyme action in terms of the ‘lock and key’ hypothesis",
    ],
    ["128", "Proteins"],
    [
      "129",
      "Explain the basic principles of homeostasis in terms of stimulus resulting from a change in the internal environment, a corrective mechanism and negative feedback",
      "The effects of variation of air movement, temperature, humidity and light intensity on transpiration rate",
      "Fats (ethanol emulsion)",
      "Stomata and mesophyll cells in gaseous exchange",
    ],
    [
      "130",
      "Discuss the spread of human immunodeficiency virus (HIV) and methods by which it may be controlled",
      "Define a hormone as a chemical substance, produced by a gland, carried by the blood, which alters the activity of one or more specific target organs and is then destroyed by the liver ",
    ],
    [
      "131",
      "Outline the cardiac cycle in terms of what happens during systole and diastole (histology of the heart muscle, names of nerves and transmitter substances are not required)",
      "Carbohydrate metabolism",
    ],
    ["132", "Absorption – root hair cells"],
    [
      "133",
      "Describe fertilisation and early development of the zygote simply in terms of the formation of a ball of cells which becomes implanted in the wall of the uterus",
      "Breakdown of red blood cells",
    ],
    ["134", "Carbohydrates"],
    [
      "135",
      "Describe the role of cilia, diaphragm, ribs and intercostal muscles in breathing",
    ],
    [
      "136",
      "Describe peristalsis in terms of rhythmic wave-like contractions of the muscles to mix and propel the contents of the alimentary canal",
    ],
    [
      "137",
      "Plasma – transport of blood cells, ions, soluble food substances, hormones, carbon dioxide, urea, vitamins, plasma proteins",
      "Use genetic diagrams to solve problems involving monohybrid inheritance (genetic diagrams involving autosomal linkage or epistasis are not required) ",
    ],
    ["138", "State the functions of the amniotic sac and the amniotic fluid"],
    ["139", "Absorption – root hair cells"],
    [
      "140",
      "Define excretion and explain the importance of removing nitrogenous and other compounds from the body",
    ],
    [
      "141",
      "Describe the difference between continuous and discontinuous variation and give examples of each ",
    ],
    ["142", "Cytoplasm"],
    [
      "143",
      "Give examples of environmental factors that act as forces of natural selection ",
    ],
    [
      "144",
      "Explain how energy losses occur along food chains, and discuss the efficiency of energy transfer between trophic levels",
      "White blood cells – phagocytosis, antibody formation and tissue rejection",
      "State that DNA is used to carry the genetic code, which is used to synthesise specific polypeptides (details of transcription and translation are not required)",
    ],
    [
      "145",
      "State that chlorophyll traps light energy and converts it into chemical energy for the formation of carbohydrates and their subsequent uses",
      "Describe the role of cilia, diaphragm, ribs and intercostal muscles in breathing",
      "Pollution due to insecticides including bioaccumulation up food chains and impact on top carnivores",
    ],
    ["146", "State the roles of water in living organisms"],
    [
      "147",
      "Define excretion and explain the importance of removing nitrogenous and other compounds from the body",
      "Transport of oxygen – red blood cells",
    ],
    [
      "148",
      "State the structure of DNA in terms of the bases, sugar and phosphate groups found in each of their nucleotides ",
    ],
    ["149", "State what is meant by homologous pairs of chromosomes "],
    ["150", "Outline the relationship between DNA, genes and chromosomes"],
    [
      "151",
      "Distribution of chloroplasts in photosynthesis ",
      "Outline the functions of sensory neurones, relay neurones and motor neurones ",
    ],
    [
      "152",
      "Describe the effects of excessive consumption of alcohol: reduced self-control, depressant, effect on reaction times, damage to liver and social implications",
      "Explain how the blood glucose concentration is regulated by insulin and glucagon as a homeostatic mechanism ",
    ],
    [
      "153",
      "Outline the mechanism of dialysis in the case of kidney failure",
      "Describe the function of the placenta and umbilical cord in relation to exchange of dissolved nutrients, gases and excretory products (structural details are not required)",
      "Investigate and explain the effects of temperature and pH on the rate of enzyme catalysed reactions",
    ],
    ["154", "Stomata and mesophyll cells in gaseous exchange"],
    [
      "155",
      "Identify and draw, using a hand lens if necessary, the sepals, petals, stamens and carpels of one, locally available, named, insect-pollinated, dicotyledonous flower, and examine the pollen grains using a microscope ",
      "Discuss the social and ethical implications of genetic engineering, with reference to a named example ",
      "White blood cells – phagocytosis, antibody formation and tissue rejection",
      "State how meiosis and fertilisation can lead to variation",
      "Fat digestion",
    ],
    [
      "156",
      "Compare the structure of typical animal and plant cells",
      "Golgi body ",
    ],
    ["157", "Briefly describe the non-cyclical nature of energy flow"],
    [
      "158",
      "Outline the process of pollination and distinguish between self-pollination and cross-pollination",
      "Water pollution by sewage and by inorganic waste ",
      "The effects of variation of air movement, temperature, humidity and light intensity on transpiration rate",
      "Pollution due to insecticides including bioaccumulation up food chains and impact on top carnivores",
      "Breakdown of red blood cells",
    ],
    [
      "159",
      "Use genetic diagrams to solve problems involving monohybrid inheritance (genetic diagrams involving autosomal linkage or epistasis are not required) ",
    ],
    ["160", "Identify, with the aid of diagrams, the main stages of mitosis"],
    [
      "161",
      "Identify, with the aid of diagrams, the main stages of meiosis (names of the sub-divisions of prophase are not required) ",
      "Describe the effect of lactic acid in muscles during exercise",
    ],
    [
      "162",
      "Outline the relationship between DNA, genes and chromosomes",
      "Explain that genes may be transferred between cells. Reference should be made to the transfer of genes between organisms of the same species or different species – transgenic plants or animals ",
      "How wilting occurs",
      "Discuss the social and ethical implications of genetic engineering, with reference to a named example ",
    ],
    ["163", "Nucleus"],
    [
      "164",
      "Cell surface membrane",
      "Identify on diagrams and name the larynx, trachea, bronchi, bronchioles, alveoli and associated capillaries",
    ],
    [
      "165",
      "White blood cells – phagocytosis, antibody formation and tissue rejection",
    ],
    [
      "166",
      "Define asexual reproduction as the process resulting in the production of genetically identical offspring from one parent ",
      "Fats (ethanol emulsion)",
    ],
    [
      "167",
      "Discuss the spread of human immunodeficiency virus (HIV) and methods by which it may be controlled",
      "Define a hormone as a chemical substance, produced by a gland, carried by the blood, which alters the activity of one or more specific target organs and is then destroyed by the liver ",
    ],
    [
      "168",
      "Red blood cells – haemoglobin and oxygen transport ",
      "State the relationship between receptors, the central nervous system and the effectors ",
    ],
    [
      "169",
      "Identify on diagrams, the female reproductive system and give the functions of: ovaries, oviducts, uterus, cervix and vagina ",
    ],
    [
      "170",
      "Define asexual reproduction as the process resulting in the production of genetically identical offspring from one parent ",
    ],
    [
      "171",
      "Conduction and support – xylem vessels",
      "Identify on diagrams, the female reproductive system and give the functions of: ovaries, oviducts, uterus, cervix and vagina ",
      "Describe the removal of carbon dioxide from the lungs, including the role of the carbonic anhydrase enzyme",
      "Protein (biuret test)",
      "State the relationship between receptors, the central nervous system and the effectors ",
    ],
    [
      "172",
      "Plasma – transport of blood cells, ions, soluble food substances, hormones, carbon dioxide, urea, vitamins, plasma proteins",
    ],
    [
      "173",
      "Identify on diagrams, the female reproductive system and give the functions of: ovaries, oviducts, uterus, cervix and vagina ",
      "Identify on diagrams and name the larynx, trachea, bronchi, bronchioles, alveoli and associated capillaries",
      "Define excretion and explain the importance of removing nitrogenous and other compounds from the body",
      "Describe the removal of carbon dioxide from the lungs, including the role of the carbonic anhydrase enzyme",
    ],
    ["174", "Lipids such as fats from glycerol and fatty acids"],
    [
      "175",
      "Describe the removal of carbon dioxide from the lungs, including the role of the carbonic anhydrase enzyme",
    ],
    [
      "176",
      "Define sexual reproduction as the process involving the fusion of nuclei to form a zygote and the production of genetically dissimilar offspring",
      "State the functions of the membrane systems and organelles identified above",
      "Water pollution by sewage and by inorganic waste ",
      "Cell surface membrane",
      "State the roles of water in living organisms",
    ],
    [
      "177",
      "Define excretion and explain the importance of removing nitrogenous and other compounds from the body",
    ],
    [
      "178",
      "List the different ABO blood groups and all possible combinations for the donor and recipient in blood transfusions",
      "Use genetic diagrams to solve problems involving monohybrid inheritance (genetic diagrams involving autosomal linkage or epistasis are not required) ",
      "Reducing sugars (Benedict's solution)",
      "Glycogen from glucose",
      "Platelets – fibrinogen to fibrin, causing clotting",
    ],
    [
      "179",
      "Identify on diagrams, the female reproductive system and give the functions of: ovaries, oviducts, uterus, cervix and vagina ",
      "State that the nervous system – brain, spinal cord and nerves, serves to co-ordinate and regulate bodily functions ",
    ],
    [
      "180",
      "Identify the positions and explain the functions of xylem vessels, phloem (sieve tube elements and companion cells) in sections of a herbaceous dicotyledonous leaf and stem, using the light microscope",
      "Describe the structure of the eye as seen in front view and in horizontal section",
      "State that variation and competition lead to differential survival of, and reproduction by, those organisms best fitted to the environment ",
      "Briefly explain how a gene that controls the production of human insulin can be inserted into bacterial DNA to produce human insulin in medical biotechnology ",
    ],
    [
      "181",
      "Describe and interpret pyramids of numbers and biomass ",
      "Define sexual reproduction as the process involving the fusion of nuclei to form a zygote and the production of genetically dissimilar offspring",
      "Describe the growth of the pollen tube and its entry into the ovule followed by fertilisation (production of endosperm and details of development are not required) ",
      "Polypeptides and proteins from amino acids",
      "Explain how energy losses occur along food chains, and discuss the efficiency of energy transfer between trophic levels",
    ],
    [
      "182",
      "Outline the process of pollination and distinguish between self-pollination and cross-pollination",
      "Describe the transfer of materials between capillaries and tissue fluid",
      "Describe the role of cilia, diaphragm, ribs and intercostal muscles in breathing",
      "Explain the terms producer, consumer and trophic level in the context of food chains and food webs ",
      "Carbohydrates",
    ],
    [
      "183",
      "Describe the intake of carbon dioxide and water by plants",
      "Glycogen from glucose",
    ],
    [
      "184",
      "Identify on diagrams and name the larynx, trachea, bronchi, bronchioles, alveoli and associated capillaries",
      "Cell vacuoles (large, sap-filled in plant cells, small, temporary in animal cells)",
      "Carbohydrate metabolism",
      "Outline the functions of sensory neurones, relay neurones and motor neurones ",
    ],
    ["185", "Breakdown of alcohol"],
    ["186", "Red blood cells – haemoglobin and oxygen transport "],
    [
      "187",
      "Define active transport and discuss its importance as an energy-consuming process by which substances are transported against a concentration gradient, as in ion uptake by root hairs and uptake of glucose by cells in the villi",
      "State the functions of the amniotic sac and the amniotic fluid",
    ],
    [
      "188",
      "Fats (ethanol emulsion)",
      "Define and state the equation, in words only, for anaerobic respiration in humans",
      "Breakdown of red blood cells",
      "Conduction and support – xylem vessels",
      "Cytoplasm",
    ],
    [
      "189",
      "Discuss the function of the brain and spinal cord in producing a co-ordinated response as a result of a specific stimulus in a reflex action",
      "Golgi body ",
      "Explain co-dominance and multiple alleles with reference to the inheritance of the ABO blood group phenotypes (A, B, AB and O) and the gene alleles (Iᴬ, Iᴮ and Iᴼ)",
      "Describe the intake of carbon dioxide and water by plants",
    ],
    [
      "190",
      "Explain why observed ratios often differ from expected ratios, especially when there are small numbers of progeny ",
      "Chloroplasts",
      "Describe the function of the placenta and umbilical cord in relation to exchange of dissolved nutrients, gases and excretory products (structural details are not required)",
    ],
    [
      "191",
      "Predict the results of simple crosses with expected ratios of 3:1 and 1:1, using the terms homozygous, heterozygous, F1 generation and F2 generation ",
    ],
    [
      "192",
      "Identify on a diagram of the skin: hairs, sweat glands, temperature receptors, blood vessels and fatty tissue",
    ],
    [
      "193",
      "Briefly describe the menstrual cycle with reference to the alternation of menstruation and ovulation, the natural variation in its length, and the fertile and infertile phases of the cycle with reference to the effects of progesterone and estrogen only",
    ],
    [
      "194",
      "Describe coronary heart disease in terms of the occlusion of coronary arteries and list the possible causes, such as diet, stress and smoking, stating the possible preventative measures",
    ],
    [
      "195",
      "List the different ABO blood groups and all possible combinations for the donor and recipient in blood transfusions",
      "Outline the mechanism of dialysis in the case of kidney failure",
      "Briefly explain how a gene that controls the production of human insulin can be inserted into bacterial DNA to produce human insulin in medical biotechnology ",
    ],
    ["196", "Conduction and support – xylem vessels"],
    [
      "197",
      "Explain the terms dominant, recessive, codominant, homozygous, heterozygous, phenotype and genotype ",
      "Discuss the spread of human immunodeficiency virus (HIV) and methods by which it may be controlled",
      "Explain the mode of action of enzymes in terms of an active site, enzyme-substrate complex, lowering of activation energy and enzyme specificity",
    ],
    [
      "198",
      "Explain the terms dominant, recessive, codominant, homozygous, heterozygous, phenotype and genotype ",
      "How wilting occurs",
      "Describe the removal of carbon dioxide from the lungs, including the role of the carbonic anhydrase enzyme",
      "State the structure of DNA in terms of the bases, sugar and phosphate groups found in each of their nucleotides ",
      "List the different ABO blood groups and all possible combinations for the donor and recipient in blood transfusions",
    ],
    ["199", "Reducing sugars (Benedict's solution)"],
  ],
};

const topics = {
  range: "Topics!A1:F1000",
  majorDimension: "ROWS",
  values: [
    ["Topic Level 1", "Topic Level 2", "Topic Level 3"],
    [
      "Cell Structure and Organisation",
      "Identify cell structures (including organelles) of typical plant and animal cells from diagrams, photomicrographs and as seen under the light microscope using prepared slides and fresh material treated with an appropriate temporary staining technique: ",
      "Chloroplasts",
    ],
    [
      "Cell Structure and Organisation",
      "Identify cell structures (including organelles) of typical plant and animal cells from diagrams, photomicrographs and as seen under the light microscope using prepared slides and fresh material treated with an appropriate temporary staining technique: ",
      "Cell surface membrane",
    ],
    [
      "Cell Structure and Organisation",
      "Identify cell structures (including organelles) of typical plant and animal cells from diagrams, photomicrographs and as seen under the light microscope using prepared slides and fresh material treated with an appropriate temporary staining technique: ",
      "Cell wall",
    ],
    [
      "Cell Structure and Organisation",
      "Identify cell structures (including organelles) of typical plant and animal cells from diagrams, photomicrographs and as seen under the light microscope using prepared slides and fresh material treated with an appropriate temporary staining technique: ",
      "Cytoplasm",
    ],
    [
      "Cell Structure and Organisation",
      "Identify cell structures (including organelles) of typical plant and animal cells from diagrams, photomicrographs and as seen under the light microscope using prepared slides and fresh material treated with an appropriate temporary staining technique: ",
      "Cell vacuoles (large, sap-filled in plant cells, small, temporary in animal cells)",
    ],
    [
      "Cell Structure and Organisation",
      "Identify cell structures (including organelles) of typical plant and animal cells from diagrams, photomicrographs and as seen under the light microscope using prepared slides and fresh material treated with an appropriate temporary staining technique: ",
      "Nucleus",
    ],
    [
      "Cell Structure and Organisation",
      "Identify the following membrane systems and organelles from diagrams and electron micrographs:",
      "Endoplasmic reticulum",
    ],
    [
      "Cell Structure and Organisation",
      "Identify the following membrane systems and organelles from diagrams and electron micrographs:",
      "Mitochondria",
    ],
    [
      "Cell Structure and Organisation",
      "Identify the following membrane systems and organelles from diagrams and electron micrographs:",
      "Golgi body ",
    ],
    [
      "Cell Structure and Organisation",
      "Identify the following membrane systems and organelles from diagrams and electron micrographs:",
      "Ribosomes",
    ],
    [
      "Cell Structure and Organisation",
      "State the functions of the membrane systems and organelles identified above",
    ],
    [
      "Cell Structure and Organisation",
      "Compare the structure of typical animal and plant cells",
    ],
    [
      "Cell Structure and Organisation",
      "State, in simple terms, the relationship between cell function and cell structure for the following:",
      "Absorption – root hair cells",
    ],
    [
      "Cell Structure and Organisation",
      "State, in simple terms, the relationship between cell function and cell structure for the following:",
      "Conduction and support – xylem vessels",
    ],
    [
      "Cell Structure and Organisation",
      "State, in simple terms, the relationship between cell function and cell structure for the following:",
      "Transport of oxygen – red blood cells",
    ],
    [
      "Cell Structure and Organisation",
      "Differentiate cell, tissue, organ and organ system",
    ],
    [
      "Movement of Substances",
      "Define diffusion and describe its role in nutrient uptake and gaseous exchange in plants and humans",
    ],
    [
      "Movement of Substances",
      "Define osmosis and describe the effects of osmosis on plant and animal tissues",
    ],
    [
      "Movement of Substances",
      "Define active transport and discuss its importance as an energy-consuming process by which substances are transported against a concentration gradient, as in ion uptake by root hairs and uptake of glucose by cells in the villi",
    ],
    ["Biological Molecules", "State the roles of water in living organisms"],
    [
      "Biological Molecules",
      "List the chemical elements which make up ",
      "Carbohydrates",
    ],
    [
      "Biological Molecules",
      "List the chemical elements which make up ",
      "Fats",
    ],
    [
      "Biological Molecules",
      "List the chemical elements which make up ",
      "Proteins",
    ],
    [
      "Biological Molecules",
      "Describe and carry out tests for",
      "Starch (iodine in potassium iodide solution)",
    ],
    [
      "Biological Molecules",
      "Describe and carry out tests for",
      "Reducing sugars (Benedict's solution)",
    ],
    [
      "Biological Molecules",
      "Describe and carry out tests for",
      "Protein (biuret test)",
    ],
    [
      "Biological Molecules",
      "Describe and carry out tests for",
      "Fats (ethanol emulsion)",
    ],
    [
      "Biological Molecules",
      "State that large molecules are synthesised from smaller basic units ",
      "Glycogen from glucose",
    ],
    [
      "Biological Molecules",
      "State that large molecules are synthesised from smaller basic units ",
      "Polypeptides and proteins from amino acids",
    ],
    [
      "Biological Molecules",
      "State that large molecules are synthesised from smaller basic units ",
      "Lipids such as fats from glycerol and fatty acids",
    ],
    [
      "Biological Molecules",
      "Explain enzyme action in terms of the ‘lock and key’ hypothesis",
    ],
    [
      "Biological Molecules",
      "Explain the mode of action of enzymes in terms of an active site, enzyme-substrate complex, lowering of activation energy and enzyme specificity",
    ],
    [
      "Biological Molecules",
      "Investigate and explain the effects of temperature and pH on the rate of enzyme catalysed reactions",
    ],
    [
      "Nutrition in Humans",
      "Describe the functions of main regions of the alimentary canal and the associated organs: mouth, salivary glands, oesophagus, stomach, duodenum, pancreas, gall bladder, liver, ileum, colon, rectum, anus, in relation to ingestion, digestion, absorption, assimilation and egestion of food, as appropriate",
    ],
    [
      "Nutrition in Humans",
      "Describe peristalsis in terms of rhythmic wave-like contractions of the muscles to mix and propel the contents of the alimentary canal",
    ],
    [
      "Nutrition in Humans",
      "Describe the functions of enzymes (e.g. amylase, maltase, protease, lipase) in digestion, listing the substrates and end-products",
    ],
    [
      "Nutrition in Humans",
      "Describe the structure of a villus and its role, including the role of capillaries and lacteals in absorption",
    ],
    [
      "Nutrition in Humans",
      "State the function of the hepatic portal vein as the transport of blood rich in absorbed nutrients from the small intestine to the liver",
    ],
    [
      "Nutrition in Humans",
      "State the role of the liver in ",
      "Carbohydrate metabolism",
    ],
    ["Nutrition in Humans", "State the role of the liver in ", "Fat digestion"],
    [
      "Nutrition in Humans",
      "State the role of the liver in ",
      "Breakdown of red blood cells",
    ],
    [
      "Nutrition in Humans",
      "State the role of the liver in ",
      "Metabolism of amino acids and the formation of urea",
    ],
    [
      "Nutrition in Humans",
      "State the role of the liver in ",
      "Breakdown of alcohol",
    ],
    [
      "Nutrition in Humans",
      "Describe the effects of excessive consumption of alcohol: reduced self-control, depressant, effect on reaction times, damage to liver and social implications",
    ],
    [
      "Nutrition in Plants",
      "Identify and label the cellular and tissue structure of a dicotyledonous leaf, as seen in transverse section using the light microscope and describe the significance of these features in terms of their functions, such as the",
      "Distribution of chloroplasts in photosynthesis ",
    ],
    [
      "Nutrition in Plants",
      "Identify and label the cellular and tissue structure of a dicotyledonous leaf, as seen in transverse section using the light microscope and describe the significance of these features in terms of their functions, such as the",
      "Stomata and mesophyll cells in gaseous exchange",
    ],
    [
      "Nutrition in Plants",
      "Identify and label the cellular and tissue structure of a dicotyledonous leaf, as seen in transverse section using the light microscope and describe the significance of these features in terms of their functions, such as the",
      "Vascular bundles in transport",
    ],
    [
      "Nutrition in Plants",
      "State the equation, in words and symbols, for photosynthesis",
    ],
    [
      "Nutrition in Plants",
      "Describe the intake of carbon dioxide and water by plants",
    ],
    [
      "Nutrition in Plants",
      "State that chlorophyll traps light energy and converts it into chemical energy for the formation of carbohydrates and their subsequent uses",
    ],
    [
      "Nutrition in Plants",
      "Investigate and discuss the effects of varying light intensity, carbon dioxide concentration and temperature on the rate of photosynthesis (e.g. in submerged aquatic plant)",
    ],
    [
      "Nutrition in Plants",
      "Discuss light intensity, carbon dioxide concentration and temperature as limiting factors on the rate of photosynthesis",
    ],
    [
      "Transport in Flowering Plants",
      "Identify the positions and explain the functions of xylem vessels, phloem (sieve tube elements and companion cells) in sections of a herbaceous dicotyledonous leaf and stem, using the light microscope",
    ],
    [
      "Transport in Flowering Plants",
      "Relate the structure and functions of root hairs to their surface area, and to water and ion uptake",
    ],
    [
      "Transport in Flowering Plants",
      "Explain the movement of water between plant cells, and between them and the environment in\nterms of water potential (calculations on water potential are not required)",
    ],
    [
      "Transport in Flowering Plants",
      "Outline the pathway by which water is transported from the roots to the leaves through the xylem vessels",
    ],
    [
      "Transport in Flowering Plants",
      "Define the term transpiration and explain that transpiration is a consequence of gaseous exchange in plants",
      "",
      "",
      " ",
    ],
    [
      "Transport in Flowering Plants",
      "Describe and explain",
      "The effects of variation of air movement, temperature, humidity and light intensity on transpiration rate",
    ],
    [
      "Transport in Flowering Plants",
      "Describe and explain",
      "How wilting occurs",
    ],
    [
      "Transport in Flowering Plants",
      "Define the term translocation as the transport of food in the phloem tissue and illustrate the process through translocation studies",
    ],
    [
      "Transport in Humans",
      "Identify the main blood vessels to and from the heart, lungs, liver and kidney",
    ],
    [
      "Transport in Humans",
      "State the role of blood in transport and defence",
      "Red blood cells – haemoglobin and oxygen transport ",
    ],
    [
      "Transport in Humans",
      "State the role of blood in transport and defence",
      "Plasma – transport of blood cells, ions, soluble food substances, hormones, carbon dioxide, urea, vitamins, plasma proteins",
    ],
    [
      "Transport in Humans",
      "State the role of blood in transport and defence",
      "White blood cells – phagocytosis, antibody formation and tissue rejection",
    ],
    [
      "Transport in Humans",
      "State the role of blood in transport and defence",
      "Platelets – fibrinogen to fibrin, causing clotting",
    ],
    [
      "Transport in Humans",
      "List the different ABO blood groups and all possible combinations for the donor and recipient in blood transfusions",
    ],
    [
      "Transport in Humans",
      "Relate the structure of arteries, veins and capillaries to their functions",
    ],
    [
      "Transport in Humans",
      "Describe the transfer of materials between capillaries and tissue fluid",
    ],
    [
      "Transport in Humans",
      "Describe the structure and function of the heart in terms of muscular contraction and the working of valves",
    ],
    [
      "Transport in Humans",
      "Outline the cardiac cycle in terms of what happens during systole and diastole (histology of the heart muscle, names of nerves and transmitter substances are not required)",
    ],
    [
      "Transport in Humans",
      "Describe coronary heart disease in terms of the occlusion of coronary arteries and list the possible causes, such as diet, stress and smoking, stating the possible preventative measures",
    ],
    [
      "Respiration in Humans",
      "Identify on diagrams and name the larynx, trachea, bronchi, bronchioles, alveoli and associated capillaries",
    ],
    [
      "Respiration in Humans",
      "State the characteristics of, and describe the role of, the exchange surface of the alveoli in gas exchange",
    ],
    [
      "Respiration in Humans",
      "Describe the removal of carbon dioxide from the lungs, including the role of the carbonic anhydrase enzyme",
    ],
    [
      "Respiration in Humans",
      "Describe the role of cilia, diaphragm, ribs and intercostal muscles in breathing",
    ],
    [
      "Respiration in Humans",
      "Describe the effect of tobacco smoke and its major toxic components – nicotine, tar and carbon monoxide, on health",
    ],
    [
      "Respiration in Humans",
      "Define and state the equation, in words and symbols, for aerobic respiration in humans",
    ],
    [
      "Respiration in Humans",
      "Define and state the equation, in words only, for anaerobic respiration in humans",
    ],
    [
      "Respiration in Humans",
      "Describe the effect of lactic acid in muscles during exercise",
    ],
    [
      "Excretion in Humans",
      "Define excretion and explain the importance of removing nitrogenous and other compounds from the body",
    ],
    [
      "Excretion in Humans",
      "Outline the function of the nephron with reference to ultra-filtration and selective reabsorption in the production of urine",
    ],
    [
      "Excretion in Humans",
      "Outline the role of anti-diuretic hormone (ADH) in osmoregulation ",
    ],
    [
      "Excretion in Humans",
      "Outline the mechanism of dialysis in the case of kidney failure",
    ],
    [
      "Homeostasis",
      "Define homeostasis as the maintenance of a constant internal environment",
    ],
    [
      "Homeostasis",
      "Explain the basic principles of homeostasis in terms of stimulus resulting from a change in the internal environment, a corrective mechanism and negative feedback",
    ],
    [
      "Homeostasis",
      "Identify on a diagram of the skin: hairs, sweat glands, temperature receptors, blood vessels and fatty tissue",
    ],
    [
      "Homeostasis",
      "Describe the maintenance of a constant body temperature in humans in terms of insulation and the role of: temperature receptors in the skin, sweating, shivering, blood vessels near the skin surface and the co-ordinating role of the hypothalamus",
    ],
    [
      "Co-ordination and Response in Humans",
      "State the relationship between receptors, the central nervous system and the effectors ",
    ],
    [
      "Co-ordination and Response in Humans",
      "Describe the structure of the eye as seen in front view and in horizontal section",
    ],
    [
      "Co-ordination and Response in Humans",
      "State the principal functions of component parts of the eye in producing a focused image of near and distant objects on the retina ",
    ],
    [
      "Co-ordination and Response in Humans",
      "Describe the pupil reflex in response to bright and dim light",
    ],
    [
      "Co-ordination and Response in Humans",
      "State that the nervous system – brain, spinal cord and nerves, serves to co-ordinate and regulate bodily functions ",
    ],
    [
      "Co-ordination and Response in Humans",
      "Outline the functions of sensory neurones, relay neurones and motor neurones ",
    ],
    [
      "Co-ordination and Response in Humans",
      "Discuss the function of the brain and spinal cord in producing a co-ordinated response as a result of a specific stimulus in a reflex action",
    ],
    [
      "Co-ordination and Response in Humans",
      "Define a hormone as a chemical substance, produced by a gland, carried by the blood, which alters the activity of one or more specific target organs and is then destroyed by the liver ",
    ],
    [
      "Co-ordination and Response in Humans",
      "Explain what is meant by an endocrine gland, with reference to the islets of Langerhans in the pancreas",
    ],
    [
      "Co-ordination and Response in Humans",
      "State the role of the hormone adrenaline in boosting blood glucose levels and give examples of situations in which this may occur ",
    ],
    [
      "Co-ordination and Response in Humans",
      "Explain how the blood glucose concentration is regulated by insulin and glucagon as a homeostatic mechanism ",
    ],
    [
      "Co-ordination and Response in Humans",
      "Describe the signs, such as an increased blood glucose level and glucose in urine, and the treatment of diabetes mellitus using insulin",
    ],
    [
      "Reproduction",
      "Define asexual reproduction as the process resulting in the production of genetically identical offspring from one parent ",
    ],
    [
      "Reproduction",
      "Define sexual reproduction as the process involving the fusion of nuclei to form a zygote and the production of genetically dissimilar offspring",
    ],
    [
      "Reproduction",
      "Identify and draw, using a hand lens if necessary, the sepals, petals, stamens and carpels of one, locally available, named, insect-pollinated, dicotyledonous flower, and examine the pollen grains using a microscope ",
    ],
    [
      "Reproduction",
      "State the functions of the sepals, petals, anthers and carpels ",
    ],
    [
      "Reproduction",
      "Use a hand lens to identify and describe the stamens and stigmas of one, locally available, named, wind-pollinated flower, and examine the pollen grains using a microscope",
    ],
    [
      "Reproduction",
      "Outline the process of pollination and distinguish between self-pollination and cross-pollination",
    ],
    [
      "Reproduction",
      "Compare, using fresh specimens, an insect-pollinated and a wind-pollinated flower",
    ],
    [
      "Reproduction",
      "Describe the growth of the pollen tube and its entry into the ovule followed by fertilisation (production of endosperm and details of development are not required) ",
    ],
    [
      "Reproduction",
      "Identify on diagrams, the male reproductive system and give the functions of: testes, scrotum, sperm ducts, prostate gland, urethra and penis",
    ],
    [
      "Reproduction",
      "Identify on diagrams, the female reproductive system and give the functions of: ovaries, oviducts, uterus, cervix and vagina ",
    ],
    [
      "Reproduction",
      "Briefly describe the menstrual cycle with reference to the alternation of menstruation and ovulation, the natural variation in its length, and the fertile and infertile phases of the cycle with reference to the effects of progesterone and estrogen only",
    ],
    [
      "Reproduction",
      "Describe fertilisation and early development of the zygote simply in terms of the formation of a ball of cells which becomes implanted in the wall of the uterus",
    ],
    [
      "Reproduction",
      "State the functions of the amniotic sac and the amniotic fluid",
    ],
    [
      "Reproduction",
      "Describe the function of the placenta and umbilical cord in relation to exchange of dissolved nutrients, gases and excretory products (structural details are not required)",
    ],
    [
      "Reproduction",
      "Discuss the spread of human immunodeficiency virus (HIV) and methods by which it may be controlled",
    ],
    [
      "Cell Division",
      "State the importance of mitosis in growth, repair and asexual reproduction",
    ],
    [
      "Cell Division",
      "Explain the need for the production of genetically identical cells",
    ],
    [
      "Cell Division",
      "Identify, with the aid of diagrams, the main stages of mitosis",
    ],
    [
      "Cell Division",
      "State what is meant by homologous pairs of chromosomes ",
    ],
    [
      "Cell Division",
      "Identify, with the aid of diagrams, the main stages of meiosis (names of the sub-divisions of prophase are not required) ",
    ],
    [
      "Cell Division",
      "Define the terms haploid and diploid, and explain the need for a reduction division process prior to fertilisation in sexual reproduction",
    ],
    [
      "Cell Division",
      "State how meiosis and fertilisation can lead to variation",
    ],
    [
      "Molecular Genetics",
      "Outline the relationship between DNA, genes and chromosomes",
    ],
    [
      "Molecular Genetics",
      "State the structure of DNA in terms of the bases, sugar and phosphate groups found in each of their nucleotides ",
    ],
    ["Molecular Genetics", "State the rule of complementary base pairing"],
    [
      "Molecular Genetics",
      "State that DNA is used to carry the genetic code, which is used to synthesise specific polypeptides (details of transcription and translation are not required)",
    ],
    [
      "Molecular Genetics",
      "State that each gene is a sequence of nucleotides, as part of a DNA molecule ",
    ],
    [
      "Molecular Genetics",
      "Explain that genes may be transferred between cells. Reference should be made to the transfer of genes between organisms of the same species or different species – transgenic plants or animals ",
    ],
    [
      "Molecular Genetics",
      "Briefly explain how a gene that controls the production of human insulin can be inserted into bacterial DNA to produce human insulin in medical biotechnology ",
    ],
    [
      "Molecular Genetics",
      "Discuss the social and ethical implications of genetic engineering, with reference to a named example ",
    ],
    [
      "Inheritance",
      "Define a gene as a unit of inheritance and distinguish clearly between the terms gene and allele",
    ],
    [
      "Inheritance",
      "Explain the terms dominant, recessive, codominant, homozygous, heterozygous, phenotype and genotype ",
    ],
    [
      "Inheritance",
      "Predict the results of simple crosses with expected ratios of 3:1 and 1:1, using the terms homozygous, heterozygous, F1 generation and F2 generation ",
    ],
    [
      "Inheritance",
      "Explain why observed ratios often differ from expected ratios, especially when there are small numbers of progeny ",
    ],
    [
      "Inheritance",
      "Use genetic diagrams to solve problems involving monohybrid inheritance (genetic diagrams involving autosomal linkage or epistasis are not required) ",
    ],
    [
      "Inheritance",
      "Explain co-dominance and multiple alleles with reference to the inheritance of the ABO blood group phenotypes (A, B, AB and O) and the gene alleles (Iᴬ, Iᴮ and Iᴼ)",
    ],
    [
      "Inheritance",
      "Describe the determination of sex in humans – XX and XY chromosomes ",
    ],
    [
      "Inheritance",
      "Describe mutation as a change in the structure of a gene such as in sickle cell anaemia, or in the chromosome number, such as the 47 chromosomes in the condition known as Down syndrome",
    ],
    [
      "Inheritance",
      "Name radiation and chemicals as factors which may increase the rate of mutation",
    ],
    [
      "Inheritance",
      "Describe the difference between continuous and discontinuous variation and give examples of each ",
    ],
    [
      "Inheritance",
      "State that variation and competition lead to differential survival of, and reproduction by, those organisms best fitted to the environment ",
    ],
    [
      "Inheritance",
      "Give examples of environmental factors that act as forces of natural selection ",
    ],
    [
      "Inheritance",
      "Explain the role of natural selection as a possible mechanism for evolution",
    ],
    [
      "Inheritance",
      "Give examples of artificial selection such as in the production of economically important plants and animals",
    ],
    [
      "Organisms and their Environment",
      "Briefly describe the non-cyclical nature of energy flow",
    ],
    [
      "Organisms and their Environment",
      "Explain the terms producer, consumer and trophic level in the context of food chains and food webs ",
    ],
    [
      "Organisms and their Environment",
      "Explain how energy losses occur along food chains, and discuss the efficiency of energy transfer between trophic levels",
    ],
    [
      "Organisms and their Environment",
      "Describe and interpret pyramids of numbers and biomass ",
    ],
    [
      "Organisms and their Environment",
      "Describe how carbon is cycled within an ecosystem and outline the role of forests and oceans as carbon sinks",
    ],
    [
      "Organisms and their Environment",
      "Evaluate the effects of",
      "Water pollution by sewage and by inorganic waste ",
    ],
    [
      "Organisms and their Environment",
      "Evaluate the effects of",
      "Pollution due to insecticides including bioaccumulation up food chains and impact on top carnivores",
    ],
    [
      "Organisms and their Environment",
      "Outline the roles of microorganisms in sewage treatment as an example of environmental biotechnology",
    ],
    [
      "Organisms and their Environment",
      "Discuss reasons for conservation of species with reference to the maintenance of biodiversity and how this is done, e.g. management of fisheries and management of timber production",
    ],
  ],
};

module.exports = {
  questions,
  topics,
};
