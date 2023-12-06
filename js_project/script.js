function getTeaInfo() {
  const teaType = document.getElementById('teaInput').value.toLowerCase();
  const teaInfoDiv = document.getElementById('teaInfo');

  const teaData = {
    green: {
      description: 'Green tea is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process used to make oolong teas and black teas. It is rich in antioxidants and has various health benefits.',
      benefits: 'Green tea is believed to improve brain function, fat loss, and lower the risk of cancer. It also contains bioactive compounds that improve health.',
      preparation: 'To prepare green tea, heat water to about 80°C (175°F), pour it over the tea leaves, and steep for 2-3 minutes. Avoid using boiling water to prevent bitterness.'
    },
    
    black: {
      description: 'Black tea is a type of tea that is more oxidized than oolong, green, and white teas. It is generally stronger in flavor than other teas and contains caffeine.',
      benefits: 'Black tea may improve heart health, lower cholesterol levels, and improve gut health. It also contains antioxidants called polyphenols.',
      preparation: 'For black tea, bring water to a rolling boil (100°C or 212°F), pour it over the tea leaves, and steep for 3-5 minutes. Adjust steeping time based on desired strength.'
    },
    
    herbal: {
      description: 'Herbal tea is not made from the Camellia sinensis plant, like other teas. Instead, it is an infusion made from dried fruits, flowers, herbs, or spices.',
      benefits: 'Herbal teas offer various health benefits depending on the ingredients used. They are often caffeine-free and can have calming, digestive, or immune-boosting properties.',
      preparation: 'To prepare herbal tea, bring water to a boil, pour it over the herbal blend, and let it steep for 5-10 minutes. Strain and enjoy.'
    }, 
    
    oolong: {
      description: 'Oolong tea is a traditional Chinese tea produced through a unique process that includes withering the plant under strong sun and oxidation before curling and twisting. It lies between green and black tea in oxidation levels.',
      benefits: 'Oolong tea may help in weight management, improve heart health, and aid digestion. It contains antioxidants and various vitamins.',
      preparation: 'For oolong tea, use water around 85-90°C (185-194°F), steep for 3-5 minutes for light oolongs and 6-8 minutes for darker varieties.'
    },
    
    mint: {
      description: 'Mint tea is an herbal tea made from peppermint or spearmint leaves. It is known for its refreshing and soothing qualities, often enjoyed for its aromatic flavor.',
      benefits: 'Mint tea can aid digestion, relieve stress, and freshen breath. It has antimicrobial and antioxidant properties.',
      preparation: 'To prepare mint tea, steep fresh or dried mint leaves in hot water for 5-10 minutes. Strain and serve.'
    },
    
    chamomile: {
      description: 'Chamomile tea is an herbal infusion made from dried chamomile flowers. It is popular for its calming and relaxing effects, often used as a natural remedy for various ailments.',
      benefits: 'Chamomile tea may help with sleep, reduce inflammation, and soothe digestive issues. It has antioxidants and anti-inflammatory properties.',
      preparation: 'For chamomile tea, steep chamomile flowers in hot water for 5-10 minutes. Strain before drinking.'
    },
    
    white: {
      description: 'White tea comes from young leaves and buds of the Camellia sinensis plant. It is the least processed tea, with delicate flavors and subtle sweetness.',
      benefits: 'White tea is rich in antioxidants, may promote healthy skin, and support oral health. It has anti-aging and antibacterial properties.',
      preparation: 'To prepare white tea, use water around 70-75°C (158-167°F), steep for 4-5 minutes. Avoid using boiling water to preserve delicate flavors.'
    },
    
    puErh: {
      description: 'Pu-erh tea is a fermented tea produced in Yunnan, China. It undergoes microbial fermentation after the leaves are dried and rolled, resulting in a unique taste and aroma.',
      benefits: 'Pu-erh tea is believed to aid digestion, promote weight loss, and improve cholesterol levels. It contains antioxidants and may have probiotic properties.',
      preparation: 'For pu-erh tea, use boiling water, steep for 3-5 minutes for ripe (shou) pu-erh or 1-2 minutes for raw (sheng) pu-erh.'
    },
    
    yellow: {
      description: 'Yellow tea is a rare and delicate tea, similar to green tea but with a slower drying process. It undergoes a unique step called "sealed yellowing," giving it a mellow flavor.',
      benefits: 'Yellow tea is considered to have similar health benefits to green tea, such as boosting metabolism, improving heart health, and providing antioxidants.',
      preparation: 'For yellow tea, use water around 70-80°C (158-176°F), steep for 2-3 minutes. Adjust brewing time based on desired strength.'
    }
    
    // Add more tea types and their information here
    
  };

  if (teaData[teaType]) {
    const tea = teaData[teaType];
    teaInfoDiv.innerHTML = `
      <h2>${teaType.toUpperCase()} TEA</h2>
      <p>Description: ${tea.description}</p>
      <p>Benefits: ${tea.benefits}</p>
      <p>Preparation: ${tea.preparation}</p>
    `;
    teaInfoDiv.style.display = 'block';
  } else {
    teaInfoDiv.innerHTML = '<p>Sorry, information for this tea type is not available. Please try again.</p>';
    teaInfoDiv.style.display = 'block';
  }
}
