import json
import os

class Character():

    Name: str = ""
    Player: str= ""
    Hp: int = 0
    MaxHp: int = 0
    Class: str = ""
    lvl: int = 1
    Race: str = ""
    Alignment: str = ""
    Spellslots = [0]
    BonusInfo = [""]

    def __init__(self, name, playername, maxHp, Class, race, alignment, bonusInfo):
        self.Name = name
        self.Player = playername
        self.MaxHp = maxHp
        self.Hp = self.MaxHp
        self.Class = Class
        self.Race = race
        self.Alignment = alignment
        self.BonusInfo = bonusInfo

    def damage(self, amount):
        if amount > 0:
            self.Hp -= amount
        else:
            #here -= aswell because of negative number
            self.Hp -= amount

    def lvlup(self):
        self.lvl += 1

    def to_dict(self):
        return {
            "name" : self.Name,
            "player": self.Player,
            "maxHp": self.MaxHp,
            "hp": self.Hp,
            "class": self.Class,
            "lvl": self.lvl,
            "race": self.Race,
            "alignment": self.Alignment,
            "bonusInfo" :self.BonusInfo,
    }
    
    def to_file(self, file_path=None):
        """Save the character to a file in JSON format."""
        if file_path == None:
            file_path = os.path.join("characters", f"{self.Name.replace(' ', '_')}.json")
        os.makedirs(os.path.dirname(file_path), exist_ok=True)
        with open(file_path, 'w') as file:
            json.dump(self.to_dict(), file, indent=4)

    @classmethod
    def from_dict(cls, data):
        return cls(
            name=data['name'],
            playername=data['player'],
            maxHp=data['maxHp'],
            Class=data['class'],
            race=data['race'],
            alignment=data['alignment'],
            bonusInfo=data['bonusInfo']
        )
